(function (d) {
  var config = {
      kitId: "ryl6zij",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

// 共通
$(function () {
  var pagetop = $("#page-top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// ハンバーガーボタン
$(document).ready(function () {
  $(".ham_btn").click(function () {
    // ナビゲーションメニューの表示/非表示を切り替え
    $("nav").toggleClass("open");

    // navを開いている時はスクロールを抑止
    $("body").css({ overflow: "hidden" });

    // navが表示されたらアニメーションを開始するため、transitionクラスの付与を遅らせる
    setTimeout(() => {
      $("nav").toggleClass("transition");
    }, 50);
  });

  $("nav").click(function () {
    // navを閉じる際に各種クラスを切り替え、bodyのスクロール抑止も解除する
    $("nav").toggleClass("open");
    $("nav").toggleClass("transition");
    $("body").css({ overflow: "unset" });
  });
});

// 　プラグイン「slick」の起動とカスタマイズ
$(document).ready(function () {
  try {
    $(".slider").slick({
      autoplay: true, //自動再生on
      fade: true, //横スクロールではなくフェードアニメにする
      arrows: false, //ボタン非表示
      pauseOnHover: false, //ホバー時の再生停止をoff
      pauseOnFocus: false, //フォーカス時の再生停止をoff
      autoplaySpeed: 1800, //自動再生の速度（アニメーションの間隔）を0.5秒に
      speed: 3000, //アニメーションの動き自体の速度を2秒に
    });
  } catch (e) {}
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var headerLinks = document.querySelector(".header_links");
  if (headerLinks === null) {
    return;
  }
  var main = document.querySelector("main");

  var headerBottom = header.getBoundingClientRect().bottom;

  if (headerBottom <= 0) {
    headerLinks.classList.add("fixed");
    headerLinks.classList.remove("hidden");
    main.style.paddingTop = `${headerLinks.getBoundingClientRect().height}px`;
  } else {
    headerLinks.classList.remove("fixed");
    headerLinks.classList.add("hidden");
    main.style.paddingTop = 0;
  }
});

//fadeup

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime() {
  $(".fadeUpTrigger").each(function () {
    //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top + 100; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
    }
  });

  $(".fadeInTrigger").each(function () {
    var elemPos = $(this).offset().top + 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeIn");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
