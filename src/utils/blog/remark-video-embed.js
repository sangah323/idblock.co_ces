import { visit } from "unist-util-visit";

const YOUTUBE_REGEX =
  /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;

const LINKEDIN_VIDEO_REGEX = /^https:\/\/dms\.licdn\.com\/playlist\/vid\/.*$/;

export function remarkVideoEmbed() {
  return (tree) => {
    visit(tree, "link", (node, index, parent) => {
      const { url } = node;

      // Youtube
      const ytMatch = url.match(YOUTUBE_REGEX);
      if (ytMatch) {
        const videoId = ytMatch[1];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;

        parent.children[index] = {
          type: "html",
          value: getIframeHtml(embedUrl),
        };
        return;
      }

      // LinkedIn
      const liMatch = url.match(LINKEDIN_VIDEO_REGEX);
      if (liMatch) {
        parent.children[index] = {
          type: "html",
          value: getIframeHtml(url),
        };
        return;
      }
    });

    visit(tree, "paragraph", (node, index, parent) => {
      if (!node.children || node.children.length !== 1) return;
      const child = node.children[0];
      if (child.type !== "text") return;

      const url = child.value.trim();

      // YouTube
      const ytMatch = url.match(YOUTUBE_REGEX);
      if (ytMatch) {
        const videoId = ytMatch[1];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        parent.children[index] = {
          type: "html",
          value: getIframeHtml(embedUrl),
        };
        return;
      }

      // LinkedIn
      const liMatch = url.match(LINKEDIN_VIDEO_REGEX);
      if (liMatch) {
        parent.children[index] = {
          type: "html",
          value: getIframeHtml(url),
        };
        return;
      }
    });
  };
}

function getIframeHtml(embedUrl) {
  return `
    <iframe
      src="${embedUrl}"
      width="560"
      height="315"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  `;
}
