import { visit } from 'unist-util-visit';

export function remarkPdfEmbed() {
  return (tree) => {
    visit(tree, 'link', (node, index, parent) => {
      const url = node.url;
      const isPdf = url.endsWith('.pdf');

      if (isPdf && parent) {
        parent.children[index] = {
          type: 'html',
          value: `
            <div id="pdfWrapper" style="width: 100%;">
              <iframe src="${url}" width="100%" max-width="800px" height="600px" style="border: 1px solid #ccc; border-radius: 8px;" loading="lazy"></iframe>
              <p><a href="${url}" target="_blank" rel="noopener noreferrer">👉 PDF Link</a></p>
            </div>
          `,
        };
      }
    });
  };
}
