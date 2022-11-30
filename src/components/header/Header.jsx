import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg">Development Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://techittrainings.files.wordpress.com/2022/09/web_dev_pillar_page.jpg"
        alt=""
      />
    </div>
  );
}
