window.onload = function () {
    const testBtn = document.querySelectorAll('.js-test');
    const fade = document.querySelector('.fade');
    const testFirst = document.querySelector('.popup');
    const nextBtn = document.querySelectorAll('.js-next');
    const testStart = document.querySelector('.popup__first');
    const testSecond = document.querySelector('.popup__second');
    const testThird = document.querySelector('.popup__third');
    const dataFirstQ = document.querySelector('input[name=firstQ]');
    const dataSecondQ = document.querySelector('input[name=secondQ]');
    const dataThirdQ = document.querySelector('input[name=thirdQ]');
    const playMusicTest = document.querySelector(".music__test");
    const startPlay = document.querySelector(".header__play");
    const playMusic = document.querySelector(".music__start");
    const deg = 6;
    const hr = document.querySelector('.hr');
    const mn = document.querySelector('.mn');
    const sc = document.querySelector('.sc');
    const clockGo = setInterval(clock);
    const clockB = document.querySelector('.clock');
    const capImg = document.querySelector('.shelf__cap');
    const department = ['Гриффиндор', 'Слизерин', 'Когтевран', 'Пуффендуй'];
    const yourDepartment = document.querySelector('.cap__name');
    let flag = false;
    const boxLock = document.querySelector('.lock__img');
    const boxTop = document.querySelector('.box-3d__top');
    const boxResult = document.querySelector('.result');
    const playClock = document.querySelector('.music__clock');
    const playFail = document.querySelector('.music__fail');
    const resultLose = document.querySelector('.result__lose');
    const resultWin = document.querySelector('.result__win');
    const items = [];
    const spellTitle = document.querySelector('.spell__title');
    const spellInfo = document.querySelector('.spell__info');
    const spellQuote = document.querySelector('.spell__quote');
    const spellBtn = document.querySelector('.spell__btn');
    const spellIntro = document.querySelector('.spell__prev');
    const spellChoice = document.querySelector('.spell__choice');
    const spellNew = document.querySelector('.spell__new');
    const contactBtn = document.querySelector('.contact__btn');
    const contactSend = document.querySelector('.contact__send');
    const owl = document.querySelector('.contact__owl');
    const magicBlock = document.querySelector('.spell__wrapper');
    const magicImg = document.querySelectorAll('.flare');
    const arrChildren = testFirst.children;
    let check = 0;
    let navItems = document.querySelectorAll('.header__navig');
    const bookImg = document.querySelectorAll('.object__cube');

    bookImg.forEach((el) => {
        el.addEventListener('mouseover', function () {



        });
        el.addEventListener('mouseout', function () {
            this.style.zIndex = 7;
            let arr = this.children;
            for (let i = 0; i < arr.length; i++) {
                arr[i].style.zIndex = 7;
                setTimeout(() => {
                    arr[i].style="";
                }, 500);

            }
            setTimeout(() => {
                this.style =""
            }, 500);

        });
    })

    function removeClass(item, nameClass) {
        item.classList.remove(nameClass)
    }
    navItems.forEach((el) => {

        el.addEventListener('mouseover', function () {
            this.parentElement.classList.remove('animationOut');
            this.classList.remove('animationOut');
            this.classList.add('animation');
            let parent = this.parentElement;

            function addClass() {
                parent.classList.add('animation');
            }
            setTimeout(addClass, 550)
        })
        el.addEventListener('mouseout', function () {
            let el = this;
            this.parentElement.classList.remove('animation');
            this.parentElement.classList.add('animationOut');
            el.classList.remove('animation');
            el.classList.add('animationOut');

        })
    });

    function magic() {
        magicImg.forEach((el) => {
            el.classList.add('flare__animation');
            setTimeout(() => {
                el.classList.remove('flare__animation');
            }, 3000);
        });
        magicBlock.classList.add('swing');
        setTimeout(() => {
            magicBlock.classList.remove('swing');
        }, 500);
    }

    contactBtn.addEventListener('click', function () {
        event.preventDefault()
        const input = document.querySelectorAll('.contact__input');
        let flag = 0;
        input.forEach((el) => {
            console.log(el.value)
            if (el.value) {

                flag += 1;
                el.style.color = "white"
            } else {
                el.placeholder = "Заполните поле";
            }
        });
        if (flag === 3) {


            contactSend.classList.remove('hide');
            owl.classList.add('fly-owl')
            contactSend.classList.add('show__send');
            setTimeout(() => {
                contactSend.classList.remove('show__send');
                contactSend.classList.add('hide');

                document.getElementById('contact').reset()
            }, 3000);
            subContact();
        }
    })
    startPlay.addEventListener('click', function () {
        if (playMusic.paused) {

            playMusic.play();
            startPlay.classList.add('paused')
        } else {
            playMusic.pause();
            startPlay.classList.remove('paused')
        }

    });


    function clock() {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;

        hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;

    }


    function clearForm() {
        for (let index = 0; index < arrChildren.length; index++) {

            if (arrChildren[index].classList.contains('hide') || arrChildren[index].classList.contains('active')) {
                arrChildren[index].classList.remove('hide');
                arrChildren[index].classList.remove('active');
            }
        }
        document.querySelector('.popup').reset();
        testStart.classList.add('active')
    }

    fade.addEventListener('click', function () {
        if (testFirst.classList.contains('active')) {
            testFirst.classList.remove('active');
            testFirst.classList.add('hide');
        }
        clearForm()

        document.body.style.overflow = 'auto';
        fade.classList.add('hide');
        fade.classList.remove('show');
        if (!playMusicTest.paused) {
            playMusicTest.pause();
        }


    });
    testBtn.forEach(function (el) {
        el.addEventListener('click', function () {
            document.body.style.overflow = 'hidden';

            if (!playMusic.paused) {
                playMusic.pause();
            }
            playMusicTest.play();
            fade.classList.add('show');
            fade.classList.remove('hide');
            testFirst.classList.add('active');
            testFirst.classList.remove('hide');
        });
    });


    nextBtn.forEach(function (el) {
        el.addEventListener('click', function () {
            if (this.parentElement.classList.contains('popup__first')) {
                const checkInput = document.querySelectorAll('.check__input:checked');
                if (checkInput.length != 3) {
                    alert("Выберите 3");
                } else {
                    checkInput.forEach((el) => {
                        if (el.value === "true") {
                            check += 1;
                        }
                        dataFirstQ.value += el.name + " ";
                    });
                    this.parentElement.classList.remove('active');
                    this.parentElement.classList.add('hide')
                    testSecond.classList.add('active');
                }
            }
            if (this.parentElement.classList.contains('popup__second')) {
                const radioInput = document.querySelector('.radio__input:checked');
                if (radioInput) {
                    if (radioInput.value === "'Свободный эльф'") {
                        check += 1;
                    }

                    dataSecondQ.value = radioInput.value;
                    this.parentElement.classList.remove('active');
                    this.parentElement.classList.add('hide')
                    testThird.classList.add('active');
                } else {
                    alert("Cделайте выбор")
                }
            }
            if (this.parentElement.classList.contains('popup__third')) {
                const rangInput = document.querySelector('.range__input');
                const checkResult = document.querySelector('.result__check');
                if (rangInput.value === '7') {
                    check += 1;
                }
                dataThirdQ.value = rangInput.value;
                fade.classList.add('hide');
                fade.classList.remove('show');
                testThird.classList.remove('active');
                testFirst.classList.remove('active');
                testFirst.classList.add('hide');
                let checkWin;
                if (check < 5) {
                    checkResult.innerHTML = check;
                    checkWin = false;
                    resultLose.classList.add('show')
                } else {
                    checkWin = true
                    resultWin.classList.add('show')

                }
                document.body.style.overflow = 'auto';
                clearForm()
                playMusicTest.pause();
                subForm();
                if (window.screen.availWidth < 671) {
                    clockB.scrollIntoView({
                        block: "center",
                        behavior: "smooth"
                    });
                }
                dataFirstQ.value = "";
                check = 0;
                openBox(checkWin);
            }
        })

    })

    function subForm() {
        $.ajax({
            url: "https://api.apispreadsheets.com/data/TNgVAxVe0S3vcwmA/",
            type: "post",
            data: $("#myForm").serializeArray(),
            success: function () {},
            error: function () {}
        });
    }

    function subContact() {
        $.ajax({
            url: "https://api.apispreadsheets.com/data/KMNW7YsfjHQtICQW/",
            type: "post",
            data: $("#contact").serializeArray(),
            success: function () {},
            error: function () {}
        });
    }

    function openBox(item) {
        if (item) {
            clearInterval(clockGo)

            playClock.play()
            hr.style.transform = `rotateZ(0deg)`;
            mn.style.transform = `rotateZ(0deg)`;
            sc.style.transform = `rotateZ(0deg)`;
        } else {
            playFail.play()
        }

        setTimeout(() => {

            boxLock.src = boxLock.src.replace("lock", "unlock");
            boxResult.classList.add('open-result');
            boxTop.classList.add('open__3-d');

        }, 4000);
        setTimeout(() => {
            boxTop.classList.remove('open__3-d');
            boxTop.classList.add('close__3-d');
        }, 17000);
        setTimeout(() => {
            boxLock.src = boxLock.src.replace("unlock", "lock");
            boxTop.classList.remove('close__3-d');
            if (resultLose.classList.contains('show')) {

                resultLose.classList.remove('show');
            }
            if (resultWin.classList.contains('show')) {
                resultWin.classList.remove('show');
            }
            boxResult.classList.remove('open-result');
            if (item) {
                const clockGo = setInterval(clock);
            }
        }, 20300);

    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    function showDepartment() {

        yourDepartment.classList.remove('hide');
        yourDepartment.classList.add('show');
        setTimeout(() => {
            yourDepartment.classList.remove('show');
            yourDepartment.classList.add('hide');
        }, 2000);
    }
    capImg.addEventListener('click', function () {
        if (!flag) {
            const item = getRandomInt(4)
            yourDepartment.innerHTML = department[item];
            const contactDepartment = document.querySelector(".contact__department");
            contactDepartment.value = department[item]
            if (department[item] === 'Гриффиндор') {
                newDepartmentImg = 'gr'
            }
            if (department[item] === 'Слизерин') {
                newDepartmentImg = 'sl'
            }
            if (department[item] === 'Когтевран') {
                newDepartmentImg = 'rw'
            }
            if (department[item] === 'Пуффендуй') {
                newDepartmentImg = 'hp'
            }

            showDepartment();
            const yourDepartmentWrap = document.querySelector('.contact__wrap');
            const yourDepartmentImg = document.querySelector('.contact__home');
            const contactForm = document.querySelector('.contact__form');
            const contactProblem = document.querySelector('.contact__problem');

            yourDepartmentImg.src = yourDepartmentImg.src.replace("all_home", newDepartmentImg);
            contactProblem.classList.add('hide')
            yourDepartmentWrap.classList.add('delete');
            contactForm.classList.remove('hide')
            contactForm.classList.add('show')
            flag = true;
        } else {
            showDepartment();
        }
    });

    fetch('name.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(el => {
                items.push(el);
            })
            return items
        })
        .then((items) => {
            const randomChoice = getRandomInt(10);
            const randomItem = items[randomChoice];
            spellTitle.innerHTML = randomItem.name;
            spellInfo.innerHTML = randomItem.info;
            spellQuote.innerHTML = randomItem.ps;
        });
    spellBtn.addEventListener('click', function () {
        spellIntro.classList.add('hide')
        setTimeout(() => {
            spellChoice.classList.remove('hide');
            spellChoice.classList.add('show');
        }, 700);

        magic()
    });
    spellChoice.addEventListener('click', function () {
        spellIntro.classList.remove('hide')
        spellChoice.classList.remove('show');
        spellChoice.classList.add('hide');
    });

    function draw() {
        const canvas = document.getElementById('canvas');

        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.lineWidth = 1;
            ctx.moveTo(0, 0);
            ctx.lineTo(6, 12);
            ctx.moveTo(125, 12);
            ctx.lineTo(143, 0);
            ctx.moveTo(0, 138);
            ctx.lineTo(6, 126);
            ctx.moveTo(125, 126);
            ctx.lineTo(143, 138);
            ctx.stroke()
        }
        canvas.addEventListener('mouseup', function (e) {
            var x = e.pageX - e.target.offsetLeft,
                y = e.pageY - e.target.offsetTop;
            console.log(x, y)
        });
    }
    draw()
}

const linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.2;
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        const w = window.pageYOffset, // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            const progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash // URL с хэшем
            }
        }
    }, false);

}
(function () {
    'use strict';

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }

        return keys;
    }

    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
                ownKeys(Object(source), true).forEach(function (key) {
                    _defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function (key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }

        return target;
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;

            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    var DOC = $(document);
    var WIN = $(window);

    var layout = function () {

        var L = {
            WIN_WIDTH: 0
        };
        var SETTINGS = {
            afterResize: false,
            onInit: false
        };

        function getLayout() {
            var WIN_WIDTH = WIN.width();
            return {
                WIN_WIDTH: WIN_WIDTH
            };
        }

        function resizeHandler() {
            WIN.resize(debounce(function () {
                L = getLayout();

                if (SETTINGS.afterResize) {
                    SETTINGS.afterResize(L);
                }
            }, 100));
        }

        return {
            //#region Public methods
            layoutHandler: function layoutHandler(settings) {
                if (settings) {
                    SETTINGS = _objectSpread2(_objectSpread2({}, SETTINGS), settings);
                }

                L = getLayout();

                if (SETTINGS.onInit) {
                    SETTINGS.onInit(L);
                }

                resizeHandler();
            } //#endregion

        };
    }();

    function createCommonjsModule(fn, module) {
        return module = {
            exports: {}
        }, fn(module, module.exports), module.exports;
    }

    var noScroll = createCommonjsModule(function (module) {
        (function (root) {

            var isOn = false;
            var scrollbarSize;
            var scrollTop;

            function getScrollbarSize() {
                if (typeof scrollbarSize !== "undefined") return scrollbarSize;
                var doc = document.documentElement;
                var dummyScroller = document.createElement("div");
                dummyScroller.setAttribute("style", "width:99px;height:99px;" + "position:absolute;top:-9999px;overflow:scroll;");
                doc.appendChild(dummyScroller);
                scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
                doc.removeChild(dummyScroller);
                return scrollbarSize;
            }

            function hasScrollbar() {
                return document.documentElement.scrollHeight > window.innerHeight;
            }

            function on(options) {
                if (typeof document === "undefined" || isOn) return;
                var doc = document.documentElement;
                scrollTop = window.pageYOffset;

                if (hasScrollbar()) {
                    doc.style.width = "calc(100% - " + getScrollbarSize() + "px)";
                } else {
                    doc.style.width = "100%";
                }

                doc.style.position = "fixed";
                doc.style.top = -scrollTop + "px";
                doc.style.overflow = "hidden";
                isOn = true;
            }

            function off() {
                if (typeof document === "undefined" || !isOn) return;
                var doc = document.documentElement;
                doc.style.width = "";
                doc.style.position = "";
                doc.style.top = "";
                doc.style.overflow = "";
                window.scroll(0, scrollTop);
                isOn = false;
            }

            function toggle() {
                if (isOn) {
                    off();
                    return;
                }

                on();
            }

            var noScroll = {
                on: on,
                off: off,
                toggle: toggle
            };

            {
                module.exports = noScroll;
            }
        })();
    });

    var Menu = function () {

        var burgerMenu = $(".js-burger");
        var linkToTarget = $(".js-scroll");
        var overlay = $(".js-overlay");

        function scroll(target) {
            var top = target.offset().top;
            $("html, body").animate({
                scrollTop: top
            }, 800);
        }

        return {
            showMobileMenu: function showMobileMenu() {
                burgerMenu.click(function (e) {
                    e.preventDefault();
                    var target = $($(this).data("target"));
                    target.toggleClass("menu-mobile--active");
                    burgerMenu.toggleClass("burger--active");
                    overlay.toggleClass("active");
                    noScroll.toggle();
                });
            },
            scrollToTarget: function scrollToTarget() {
                linkToTarget.click(function (e) {
                    e.preventDefault();
                    noScroll.off();

                    var _this = $(this);

                    var href = _this.attr("href");

                    var target = $(href);

                    if (_this.data("target")) {
                        var _target = $(_this.data("target"));

                        scroll(_target);
                    }

                    if (target.length) {
                        scroll(target);
                    }

                    $(".menu-mobile").removeClass("menu-mobile--active");
                    burgerMenu.removeClass("burger--active");
                    overlay.removeClass("active");
                });
            },
            init: function init() {
                Menu.scrollToTarget();
                Menu.showMobileMenu();
            }
        };
    }();

    $(document).ready(function () {
        Menu.init();
        layout.layoutHandler({
            afterResize: function afterResize(layout) {
                if (layout.WIN_WIDTH >= 768) {
                    noScroll.off();
                }
            }
        });
    });

}());