import Head from 'next/head';
import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path';
import moment from 'moment';
import matter from 'gray-matter';



export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Riahs Blog</title>
      </Head>
      {/* Banner */}
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>Hi, my name is Forty</h1>
          </header>
          <div className="content">
            <p>A responsive site template designed by HTML5 UP<br />
              and released under the Creative Commons.</p>
            <ul className="actions">
              <li><a href="#one" className="button next scrolly">Get Started</a></li>
            </ul>
          </div>
        </div>
      </section>
      {/* Main */}
      <div id="main">
        {/* One */}
        <section id="one" className="tiles">
          <article>
            <span className="image">
              <img src="images/pic01.jpg" alt="" />
            </span>
            <header className="major">
              <h3><a href="landing.html" className="link">Aliquam</a></h3>
              <p>Ipsum dolor sit amet</p>
            </header>
          </article>

        </section>
        {/* Two */}
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Massa libero</h2>
            </header>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc
              rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel
              lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
            <ul className="actions">
              <li><a href="landing.html" className="button next">Get Started</a></li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}







export const getStaticProps = async () => {

  const sortPosts = () => {
    const allPosts = fs.readdirSync('posts').map((filename) => {
      const file = fs.readFileSync(path.join('posts', filename)).toString();
      const postData = matter(file);

      return {
        content: postData.content,
        title: postData.data.title,
        featured_image: postData.featured_image,
        date: postData.data.date
      };
      // console.log(`name: ${data.data.date}`);
    });

    return allPosts.sort(
      (a, b) => new moment(a.date).format('YYYY-MM-DD HH:mm:ss') < new moment(b.date).format('YYYY-MM-DD HH:mm:ss')
    );
  };
  console.log(fs.readdirSync('posts'));
  sortPosts()
  return {
    props: {
      slug: 'test'
    }
  }
}

// video 6 @ 6:25sec