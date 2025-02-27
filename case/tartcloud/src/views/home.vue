<template>
    <div class="full-page">
        <section class="page1 page">
            <img src="@/assets/home/page1-bg.png" alt="" />
        </section>
        <section class="page2">
            <div class="page2-top tsall">
                <h4>Full-Funnel Social Analytics</h4>
                <p>
                    Insight to help you create, connect, and convert. Understand
                    Your Audience's Interests, Influence, Interactions, and
                    Intent. Discover emerging topics and influencers to reach
                    new audiences.
                </p>
            </div>
            <div class="page2-center tsall">
                <ul class="">
                    <li>
                        <img src="@/assets/home/icon-page2-1.png" alt="" />
                        <h5>Social Conversations</h5>
                        <span
                            >Gain access to the demographics, psychographics,
                            and location of unique people.</span
                        >
                    </li>
                    <li>
                        <img src="@/assets/home/icon-page2-2.png" alt="" />
                        <h5>Analyze Performance</h5>
                        <span
                            >Unify data from Facebook, Instagram, Twitter,
                            LinkedIn, and Youtube to gain rich insights.</span
                        >
                    </li>
                    <li>
                        <img src="@/assets/home/icon-page2-3.png" alt="" />
                        <h5>Measure Conversions</h5>
                        <span
                            >Track actions taken on your website, understand the
                            impact on your bottom line.</span
                        >
                    </li>
                </ul>
            </div>
            <div class="page2-footer">
                <h4>Latest Blogposts</h4>
                <div class="pf-cont tsall">
                    <img class="pc-pic" src="@/assets/home/page2-img1.png" />
                    <div>
                        <h5 class="pc-h5">
                            Rover raised $65 million for pet sitting
                        </h5>
                        <p class="pc-p">
                            Finding temporary housing for your dog should be as
                            easy as renting an Airbnb. That’s the idea behind
                            Rover, which raised $65 million to expand its pet
                            sitting and dog-walking businesses..
                        </p>
                        <div class="bottom-slogn">
                            <img
                                src="@/assets/home/icon-page2-4.png"
                                class="pf-avatar"
                            />
                            <span>Katie Roof</span>
                            <p>Read More</p>
                        </div>
                    </div>
                </div>

                <div class="pf-cont tsall">
                    <img class="pc-pic" src="@/assets/home/page2-img2.png" />
                    <div>
                        <h5 class="pc-h5">
                            MateLabs mixes machine learning with IFTTT
                        </h5>
                        <p class="pc-p">
                            If you’ve ever wanted to train a machine learning
                            model and integrate it with IFTTT, you now can with
                            a new offering from MateLabs. MateVerse, a platform
                            where novices can spin out machine...
                        </p>
                        <div class="bottom-slogn">
                            <img
                                src="@/assets/home/icon-page2-5.png"
                                class="pf-avatar"
                            />
                            <span>John Mannes</span>
                            <p>Read More</p>
                        </div>
                    </div>
                </div>

                <div class="pf-cont tsall">
                    <img class="pc-pic" src="@/assets/home/page2-img3.png" />
                    <div>
                        <h5 class="pc-h5">
                            US venture investment ticks up in Q2 2017
                        </h5>
                        <p class="pc-p">
                            Venture investment in U.S. startups rose
                            sequentially in the second quarter of 2017, boosted
                            by large, late-stage financings and a few outsized
                            early-stage rounds in tech and healthcare..
                        </p>
                        <div class="bottom-slogn">
                            <img
                                src="@/assets/home/icon-page2-6.png"
                                class="pf-avatar"
                            />
                            <span>Devin Coldewey</span>
                            <p>Read More</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page3 tsall">
            <div class="page3-bg">
                <div class="page3-top tsall">
                    <h4>The Executive Team</h4>
                    <p>
                        This is the paragraph where you can write more details
                        about your team. Keep you user engaged by providing
                        meaningful information.
                    </p>
                </div>
                <div class="page3-center">
                    <div class="p3c-list tsall">
                        <img src="@/assets/home/icon-page3-1.png" alt="" />
                        <h5 class="p3c-h5">Natalie Paisley</h5>
                        <span class="p3c-span">Credit Analyst</span>
                        <p class="p3c-p">
                            Very little is needed to make a happy life; it is
                            all within yourself, in your way of thinking...
                        </p>
                    </div>

                    <div
                        class="p3c-list tsall"
                        :style="
                            !isMobile ? 'position: relative;top:-50px;' : ''
                        "
                    >
                        <img src="@/assets/home/icon-page3-2.png" alt="" />
                        <h5 class="p3c-h5">Anthony Jackson</h5>
                        <span class="p3c-span">Desktop Publisher</span>
                        <p class="p3c-p">
                            For it was not into my ear you whispered, but into
                            my heart. It was not my lips you kissed, but my
                            soul...
                        </p>
                    </div>

                    <div class="p3c-list tsall">
                        <img src="@/assets/home/icon-page3-3.png" alt="" />
                        <h5 class="p3c-h5">Bella Audrey</h5>
                        <span class="p3c-span">Economist</span>
                        <p class="p3c-p">
                            For it was not into my ear you whispered, but into
                            my heart. It was not my lips you kissed, but my
                            soul...
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="page4">
            <div class="page4-top">
                <h4 class="p4-h4">Some of Our Awesome Products</h4>
                <p class="p4-p">
                    This is the paragraph where you can write more details about
                    your projects. Keep you user engaged by providing meaningful
                    information.
                </p>
            </div>

            <div class="page4-center">
                <div class="p4-list">
                    <img
                        class="p4l-img"
                        src="@/assets/home/page4-img1.png"
                        alt=""
                    />
                    <h5 class="p4l-h5">Now UI Kit Free</h5>
                    <span class="p4l-span">Free UI Kit</span>
                    <p class="p4l-p">
                        Now UI Kit is a Free Bootstrap UI Kit with a fresh, new
                        design inspired by Invision. It's a great pleasure to
                        introduce to you the Now UI concepts in an easy to use
                        and beautiful set of components.
                    </p>
                </div>

                <div class="p4-list">
                    <img
                        class="p4l-img"
                        src="@/assets/home/page4-img2.png"
                        alt=""
                    />
                    <h5 class="p4l-h5">Light Bootstrap Dashboard Pro</h5>
                    <span class="p4l-span">Premium Template</span>
                    <p class="p4l-p">
                        Light Bootstrap Dashboard PRO is a Bootstrap Admin Theme
                        designed to look simple and beautiful. Forget about
                        boring dashboards and grab yourself a copy to kickstart
                        new project!
                    </p>
                </div>

                <div class="p4-list">
                    <img
                        class="p4l-img"
                        src="@/assets/home/page4-img3.png"
                        alt=""
                    />
                    <h5 class="p4l-h5">Now UI Kit Free</h5>
                    <span class="p4l-span">Premium UI Kit</span>
                    <p class="p4l-p">
                        Get Shit Done Kit Pro it's a Bootstrap Kit that comes
                        with a huge number of customisable components. They are
                        pixel perfect, light and easy to use and combine with
                        other elements.
                    </p>
                </div>
            </div>
        </section>
        <section class="page5">
            <div class="page5-bg">
                <div class="page5-top tsall">
                    <h4>Pick the best plan for you</h4>
                    <p>You have Free Unlimited Updates on each package.</p>
                </div>
                <div class="page5-center tsall">
                    <div
                        class="p5-list tc"
                        style="background: #fff; margin-right: 56px"
                    >
                        <p class="p5-plan">Freelance</p>
                        <div class="p5-money">
                            <span>$</span><strong>29 </strong>/M
                        </div>
                        <div class="p5l-tr line">1 GB of space</div>
                        <div class="p5l-tr line">Limited Support</div>
                        <div class="p5l-tr line">Support at $25/hour</div>
                        <div class="p5l-tr">Limited cloud access</div>
                        <button
                            class="goto-page"
                            style="background: #ff7945; color: #fff"
                        >
                            Get Started
                        </button>
                    </div>
                    <div class="p5-list tc" style="background: #ff7945">
                        <p class="p5-plan" style="color: #fff">Business</p>
                        <div class="p5-money" style="color: #fff">
                            <span>$</span><strong>59 </strong>/M
                        </div>
                        <div class="p5l-tr line" style="color: #fff">
                            5 GB of space
                        </div>
                        <div class="p5l-tr line" style="color: #fff">
                            UnLimited Support
                        </div>
                        <div class="p5l-tr line" style="color: #fff">
                            Unlimited Downloads
                        </div>
                        <div class="p5l-tr" style="color: #fff">
                            Full cloud access
                        </div>
                        <button class="goto-page" style="color: #ff7945">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section class="page6">
            <div class="page6-top tc-black tsall">
                <h4 class="p6-h4">What Clients Say</h4>
            </div>
            <div class="page6-center tc tsall">
                <div class="p6-list">
                    <img
                        src="@/assets/home/icon-page3-1.png"
                        alt=""
                        srcset=""
                    />
                    <h5 class="p6l-h5">Zoe Gabriella</h5>
                    <span class="p6l-span">Interpreter OR Translator</span>
                    <p class="p6l-p">
                        "Don't walk behind me; I may not lead. Don't walk in
                        front of me; I may not follow. Just walk beside me and
                        be my friend."
                    </p>
                </div>

                <div class="p6-list">
                    <img
                        src="@/assets/home/icon-page3-2.png"
                        alt=""
                        srcset=""
                    />
                    <h5 class="p6l-h5">Zoe Gabriella</h5>
                    <span class="p6l-span">Interpreter OR Translator</span>
                    <p class="p6l-p">
                        "Don't walk behind me; I may not lead. Don't walk in
                        front of me; I may not follow. Just walk beside me and
                        be my friend."
                    </p>
                </div>

                <div class="p6-list">
                    <img
                        src="@/assets/home/icon-page3-3.png"
                        alt=""
                        srcset=""
                    />
                    <h5 class="p6l-h5">Zoe Gabriella</h5>
                    <span class="p6l-span">Interpreter OR Translator</span>
                    <p class="p6l-p">
                        "Don't walk behind me; I may not lead. Don't walk in
                        front of me; I may not follow. Just walk beside me and
                        be my friend."
                    </p>
                </div>
            </div>
        </section>
        <section class="page7">
            <div class="page7-bg">
                <div class="p7-left c-white tsall">
                    <h4 class="p7l-h4">Get in Touch</h4>
                    <p class="p7l-p">
                        You need more information? Check what other persons are
                        saying about our product. They are very happy with their
                        purchase.
                    </p>
                    <div class="left-item">
                        <h5 class="p7l-item-h5">Find us at the office</h5>
                        <span
                            >Bld Mihail Kogalniceanu, nr. 8, 7652
                            Bucharest,Romania</span
                        >
                    </div>
                    <div class="left-item">
                        <h5 class="p7l-item-h5">Give us a ring</h5>
                        <span
                            >Michael Jordan <br />
                            +40 762 321 762 Mon - Fri,<br />
                            8:00-22:00</span
                        >
                    </div>
                </div>
                <div class="p7-right t-black tsall">
                    <h5 class="p7r-h5">Contact Us</h5>
                    <form class="p7r-form tsall">
                        <div class="inline-label">
                            <label for="">First name</label>
                            <input type="text" placeholder="First name..." />
                        </div>
                        <div class="inline-label">
                            <label for="">Last name</label>
                            <input type="text" placeholder="Last name..." />
                        </div>
                        <div class="block-label">
                            <label for="">Email address</label>
                            <input type="text" placeholder="Email Here..." />
                        </div>
                        <div class="block-label">
                            <label for="">Your message</label>
                            <textarea rows="4" name="" id=""></textarea>
                        </div>

                        <div class="checkbox-label">
                            <input type="checkbox" id="agree" />
                            <label for="agree">I’m not a robot</label>
                        </div>
                        <button class="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
let isMobile = ref(false);
onMounted(() => {
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    }
    // if (isMobileDevice() && window.innerWidth <= 768) {}
    if (isMobileDevice() && window.innerWidth <= 768) {
        isMobile.value = true;
    } else {
        isMobile.value = false;
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth <= 768) {
            isMobile.value = true;
        } else {
            isMobile.value = false;
        }
    }); // 监听窗口大小变化
});

onUnmounted(() => {
    window.removeEventListener("resize", () => {
        if (window.innerWidth <= 768) {
            isMobile.value = true;
        } else {
            isMobile.value = false;
        }
    });
});


</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
}
.full-page {
    overflow-x: hidden;
    img {
        // height: calc(100vh - 66px);
        max-width: 100%;
    }
}

.page2 {
    text-align: center;
    padding-top: 80px;
    padding-bottom: 40px;
    .page2-top {
        font-size: 20px;
        max-width: 500px;
        margin: 0 auto 18px;
        p {
            font-size: 14px;
            color: #666;
            line-height: 20px;
        }
    }

    .page2-center {
        max-width: 44%;
        margin: 45px auto 50px;
        ul {
            display: flex;
            justify-content: space-between;
            li {
                max-width: 30%;
                margin-top: 10px;
                font-size: 16px;
                h5 {
                    font-size: 18px;
                }
            }
        }
    }

    .page2-footer {
        margin: 70px auto 20px;
        h4 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        .pf-cont {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            max-width: 45%;
            margin: 0 auto;
            text-align: left;
            position: relative;
            .pc-pic {
                width: 100%;
                max-width: 270px;
            }
            .pc-h5 {
                display: inline-block;
                font-size: 16px;
                margin-bottom: 10px;
            }
            .pc-p {
                font-size: 14px;
                color: #666;
                line-height: 20px;
            }
            .bottom-slogn {
                margin-top: 10px;
                display: flex;
                align-items: center;
                position: relative;
                .pf-avatar {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                }
                span {
                    font-size: 14px;
                    color: #666;
                    margin-left: 12px;
                    // padding-bottom: 18px;
                }
                p {
                    position: absolute;
                    right: 0;
                    font-size: 12px;
                    color: #666;
                }
            }
        }
    }
}

.page3-bg {
    width: 100%;
    max-width: 100%;
    height: 937px;
    background: url(/src/assets/home/page3-bg.png) no-repeat;
    background-size: cover;
    .p3c-list {
        position: relative;
        background: #fff;
        width: 300px;
        padding: 0px 20px 40px;
        border-radius: 5px;
        margin: 0 auto;
        text-align: center;
        > img {
            margin-top: -80px;
            width: 180px;
            height: 180px;
        }
        .p3c-h5 {
            font-size: 22px;
        }
        .p3c-span {
            font-size: 16px;
            color: #ff7945;
            margin-top: 10px;
            font-weight: bold;
        }
        .p3c-p {
            margin-top: 16px;
            color: #9f9f9f;
        }
    }
    .page3-center {
        margin: 0 auto;
        margin-top: 200px;
        display: flex;
        width: 72%;
    }
    .page3-top {
        padding-top: 100px;
        color: #fff;
        text-align: center;
        h4 {
            font-size: 36px;
            margin-bottom: 30px;
        }
        p {
            font-size: 20px;
            width: 50%;
            margin: 0 auto;
        }
    }
}

.page4 {
    padding-bottom: 60px;
    .page4-top {
        padding-top: 65px;
        text-align: center;
        h4 {
            font-size: 36px;
            margin-bottom: 30px;
        }
        p {
            font-size: 18px;
            width: 50%;
            color: #676767;
            margin: 0 auto;
        }
    }
    .page4-center {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        .p4-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 400px;
            margin-right: 10px;
        }
        .p4l-img {
            width: 400px;
        }
        .p4l-p {
            width: 360px;
            text-align: center;
        }
        .p4l-h5 {
            font-weight: bold;
            font-size: 18px;
        }
        .p4l-span {
            font-size: 12px;
            color: #ff7945;
            font-weight: bold;
        }
    }
}

.page5-bg {
    width: 100%;
    max-width: 100%;
    height: 830px;
    background: url(/src/assets/home/page5-bg.png) no-repeat;
    background-size: cover;
    .page5-top {
        padding-top: 98px;
        text-align: center;
        color: #fff;
        h4 {
            font-size: 30px;
        }
        p {
            margin-top: 20px;
            font-size: 18px;
        }
    }
    .page5-center {
        .p5-plan {
            color: #7d7d7d;
            font-size: 16px;
        }
        .p5-money {
            font-size: 22px;
            color: #000;
            position: relative;
            width: 100px;
            margin: 8px auto;
            span {
                position: absolute;
                left: -10px;
                top: 2px;
            }
            strong {
                font-size: 40px;
            }
        }
        .p5-list {
            display: inline-block;
            width: 320px;
            border-radius: 5px;
            margin: 65px auto 0;
            padding: 12px 0 20px;
            position: relative;
            left: 50%;
            transform: translate(calc(-50% - 160px));
            .p5l-tr {
                width: 62%;
                margin: 0 auto;
                line-height: 55px;

                font-size: 16px;
                color: #6d6d6d;
                &.line {
                    border-bottom: 1px solid #ccc;
                }
            }
            button {
                margin-top: 6px;
                width: 140px;
                line-height: 38px;
                height: 38px;
                border: none;
                border-radius: 28px;
            }
        }
    }
}

.page6 {
    padding-bottom: 100px;
    .page6-top {
        margin-top: 90px;
        .p6-h4 {
            font-size: 32px;
        }
    }

    .page6-center {
        width: 90%;
        margin-top: 55px;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        .p6-list {
            width: 16%;
            margin-right: 3%;
            .p6l-h5 {
                font-size: 20px;
            }
            .p6l-span {
                font-size: 12px;
                color: #ff7945;
                font-weight: bold;
            }
            .p6l-p {
                margin-top: 10px;
            }
        }
    }
}

.page7-bg {
    width: 100%;
    max-width: 100%;
    height: 703px;
    display: flex;
    justify-content: center;
    background: url(@/assets/home/page7-bg.png) no-repeat;
    background-size: cover;
    .p7-left {
        margin-top: 76px;
        max-width: 13%;
        .p7l-h4 {
            font-size: 26px;
        }
        .p7l-p {
            font-size: 14px;
        }
        .left-item {
            margin-top: 22px;
            .p7l-item-h5 {
                font-size: 18px;
            }
            span {
                padding-left: 20px;
                color: #d0d0d0;
            }
        }
    }
    .p7-right {
        width: 280px;
        margin-left: 130px;
        margin-top: 70px;
        background: #fff;
        padding: 15px 24px;
        max-height: 320px;
        border-radius: 5px;
        .p7r-h5 {
            font-size: 24px;
            text-align: center;
        }
        .p7r-form {
            margin-top: 6px;
            position: relative;
            .inline-label {
                width: 40%;
                display: inline-block;
                margin-right: 26px;
                margin-bottom: 16px;
            }

            .block-label {
                margin-bottom: 16px;
                input {
                    width: 90%;
                }
            }
            .checkbox-label {
                display: flex;
                margin-right: 10px;
                width: 200px;
                align-items: center;
                input {
                    margin-right: 6px;
                    width: 15px;
                    height: 15px;
                    border: 1px solid #ccc;
                }
            }
            input {
                border: 1px solid #ccc;
                font-size: 12px;
                width: 100%;
                border-radius: 15px;
                padding: 5px 8px;
            }
            textarea {
                width: 95%;
                display: block;
                padding-left: 6px;
                padding-top: 5px;
                border: 1px solid #ccc;
            }

            .submit-btn {
                position: absolute;
                bottom: -5px;
                right: 0;
                background: #ff7945;
                color: #fff;
                border-radius: 20px;
                height: 35px;
                width: 100px;
                border: none;
            }
        }
        .p7r-form .inline-label:last-child {
            margin-right: 0;
        }
    }
}

@media (max-width: 768px) {
    .page2 {
        .page2-top {
            max-width: 300px;
        }
        .page2-center {
            max-width: 90%;
            ul {
                flex-direction: column;
                align-items: center;
                li {
                    max-width: 90%;
                    margin-top: 22px;
                }
            }
        }
        .page2-footer {
            .pf-cont {
                flex-direction: column;
                max-width: 78%;
                margin-bottom: 22px;
            }
        }
    }
    .page3-bg {
        .page3-top {
            padding-top: 40px;
            color: #fff;
            text-align: center;
            h4 {
                font-size: 26px;
                margin-bottom: 12px;
            }
            p {
                font-size: 18px;
                width: 90%;
                margin: 0 auto;
            }
        }
        .page3-center {
            width: auto;
            margin-top: 10px;
            flex-direction: column;
            align-items: center;
        }
        .p3c-list {
            margin-top: 42px;
            max-width: 250px;
            padding-bottom: 15px;
            > img {
                margin-top: -30px;
                width: 80px;
                height: 80px;
            }

            .p3c-h5 {
                font-size: 18px;
            }
            .p3c-span {
                font-size: 14px;
            }

            .p3c-p {
                margin-top: 10px;
                font-size: 12px;
            }
        }
    }
    .page4 {
        .page4-top {
            padding-top: 35px;
            h4 {
                font-size: 22px;
                margin-bottom: 15px;
            }
            p {
                font-size: 12px;
                width: 90%;
            }
        }
        .page4-center {
            flex-direction: column;
            margin-top: 20px;
            .p4-list {
                width: 100%;
                margin-bottom: 35px;
            }
            .p4l-img {
                width: 90%;
                margin: 0 auto;
            }
            .p4l-p {
                font-size: 12px;
                width: 95%;
            }
            .p4l-h5 {
                font-size: 14px;
            }
            .p4l-span {
                font-size: 10px;
            }
        }
    }
    .page5-bg {
        height: auto;
        .page5-top {
            padding-top: 40px;
            h4 {
                font-size: 24px;
            }
        }
        .page5-center {
            .p5-list {
                transform: translate(calc(-50%)) scale(0.8);
                margin-right: 0 !important;
                margin-top: 0;
            }
            .p5-list:last-child {
                margin-top: -60px;
            }
        }
    }
    .page6 {
        padding-bottom: 46px;
        .page6-top {
            margin-top: 30px;
            .p6-h4 {
                font-size: 26px;
            }
        }

        .page6-center {
            width: 98%;

            display: flex;
            margin: 25px auto 0;
            justify-content: space-between;
            .p6-list {
                width: 30%;
                margin-right: 0;
                img {
                    width: 80px;
                }
                .p6l-h5 {
                    font-size: 16px;
                }
                .p6l-span {
                    font-size: 10px;
                }
                .p6l-p {
                    margin-top: 10px;
                    font-size: 10px;
                }
            }
        }
    }
    .page7-bg {
        flex-direction: column;
        align-items: center;
        .p7-left {
            margin-top: 36px;
            max-width: 95%;
        }
        .p7-right {
            width: 80%;
            margin-left: 0;
            margin-top: 15px;
            padding: 8px 15px 20px;
            .p7r-form {
                .inline-label {
                    margin-bottom: 8px;
                    margin-right: 24px;
                }
                .block-label {
                    margin-bottom: 8px;
                }
                .submit-btn {
                    bottom: -8px;
                }
            }
        }
    }
}
</style>
