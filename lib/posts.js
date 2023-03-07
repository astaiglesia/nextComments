/** node utility for fetching external (file system) data and parsing .md file metadata using gray-matter library
 * Note:
    You don't need to understand what the code above is doing in order to learn Next.js, the function is to make the blog example functional. But if you'd like to learn more:

    - fs is a Node.js module that let's you read files from the file system.
    - path is a Node.js module that let's you manipulate file paths.
    - matter is a library that let's you parse the metadata in each markdown file.

    In Next.js, the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');     // creates string for path to posts dir (cwd => root, joins /posts)

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);           // read target dir and get file names
  const allPostsData = fileNames.map((fileName) => {
    const name = fileName.replace(/\.md$/, '');                 // Remove ".md" from file name to get id
    const fullPath = path.join(postsDirectory, fileName);     // join strings to create paths for individual file names
    const fileContents = fs.readFileSync(fullPath, 'utf8');   // Read markdown file as string
    const matterResult = matter(fileContents);                // Use gray-matter to parse the post metadata section

    return {                                                  // Combine the data with the id
      name,
      ...matterResult.data,
    };
  });


  return allPostsData.sort((a, b) => {                        // Sort posts by date
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostData(name) {
  const fullPath = path.join(postsDirectory, `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);                  // Use gray-matter to parse the post metadata section

  return {                                                    // Combine the data with the id
    name,
    ...matterResult.data,
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array of objects 
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

  return fileNames.map((fileName) => {
    return {
      params: {
        name: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
