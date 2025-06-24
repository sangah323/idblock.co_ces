const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const filePath = path.resolve(__dirname, './postsIndex.js');
const { BLOG_FILE_PATH } = require(filePath);

const postsDir = path.join(process.cwd(), BLOG_FILE_PATH.MARKDOWN_PATH);
const languages = ['kor', 'eng', 'jpn', 'vnm'];

languages.forEach((language) => {
  const posts = [];

  fs.readdirSync(postsDir).forEach((folder) => {
    const mdPath = path.join(postsDir, folder, `${language}.md`);
    if (fs.existsSync(mdPath)) {
      const raw = fs.readFileSync(mdPath, 'utf-8');
      const { data } = matter(raw);
      posts.push({
        slug: folder,
        title: data.title,
        description: data.description,
        filter: data.filter,
        date: data.date,
        thumbnail: data.thumbnail,
      });
    }
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const content = `export const posts = ${JSON.stringify(posts, null, 2)};\n`;
  const outPath = BLOG_FILE_PATH.INDEX(language);

  fs.writeFileSync(outPath, content);
});
