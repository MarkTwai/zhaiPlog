import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '恐龙的友情教程',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        善良的恐龙教你用嘴短的时间，卸除超级棒的代码，并且展现出漂亮实用的界面。
        谢谢这只小绿恐龙！
      </>
    ),
  },
  {
    title: '博客内容',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        本网站的博客主要介绍一些比较棒的作者及他们的风流往事。
      </>
    ),
  },
  {
    title: '呼呦呦',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        阿巴阿巴。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
