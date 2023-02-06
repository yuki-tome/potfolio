import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import pythonImage from "../Images/python.png";
import profileImage from "../Images/profile.jpg";
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Yuki</h1>

      <img src={profileImage} className="profileImage" alt="profile"/>

      <p>
        こんにちわ、コンピュータ理工学部学部4年のYukiです。大学では医療分野のAIを研究しています。現在、Reactの勉強中です。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
                <a href="https://o-xgame.vercel.app/">
                    <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas fa-gamepad fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="my-3">OXゲーム</h4>
                </a>
                <p class="text-muted">
                    Reactの公式サイトのOXゲームをアレンジしました。
                </p>
            </div>
            <div class="col-md-4">
                <a href="https://youtu.be/xTxCXm0LFRY">
                    <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="my-3">物件クチコミサイト</h4>
                </a>
              <p class="text-muted">
                物件の口コミを書くサイトを作りました。Djangoを用いました。まだデプロイしていないので、使っている映像を載せています。
              </p>
            </div>
            <div class="col-md-4">
                <a href="https://youtu.be/6Kq0TNnNqYI">
                    <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                        <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="my-3">帰宅お知らせシステム</h4>
                </a>
                <p class="text-muted">
                ラズベリーパイを用いたシステムで人感センサーが反応したら、カメラで写真を撮ってそれをLINEに送るシステムです。
                </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} alt="react"/>
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} alt="JavaScript"/>
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={pythonImage} alt="python"/>
              <h4>Python</h4>
              <p>Pythonがつかえます</p>
            </div>
          </div>
          <Link to="/skill-list">
            <button type="button" class="btn btn-primary">
                スキル一覧
            </button>
          </Link>
        </div>
      </section>
    </div>

  )
}

export default HomePage