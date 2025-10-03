import {gsap} from "gsap";
import SplitText from "gsap/SplitText.js";

export default class TextAnim{
    constructor(el){
        this.plugins();
       
        this.options = {
            repeat: false
        }
        this.element = el

        document.fonts.ready.then(this.init.bind(this));
    }
    plugins(){
        this.split = gsap.registerPlugin(SplitText);
    }
    init() {
        this.setOptions();
        this.split = SplitText.create(this.element,{
            type: "chars, words,lines",
            mask: "chars",
            autoSplit: true,
        })
        this.initAnim();
        this.initObserver();
    }
    initObserver(){
        const obs = new IntersectionObserver(this.watch.bind(this),{
            rootMargin: "0px 0px 0px 0px",
        });
        obs.observe(this.element);
    }
    watch(entries,obs){
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            const target = entry.target;

            if (entry.isIntersecting){
                this.anim(true);
                if (!this.options.repeat){obs.unobserve(target)};
            }else{
                this.anim(false);
            }
        }
    }


    setOptions(){
        if ("repeat" in this.element.dataset){
            this.options.repeat = true
        }
    }

    initAnim(){
        gsap.set(this.split.chars,{
            yPercent :"random([-100,100])",
            autoAlpha: 0 ,
        })
    }

    anim(isAnimIn){
        const alpha = isAnimIn ? 1 /*if true*/: 0 /*if false*/ ;
        const y = isAnimIn ? 0 : "random([-100,100])" ;
         gsap.to(this.split.chars,{
            duration: 1,
            yPercent : y,
            autoAlpha: alpha,
            // delay: 0.22,
            stagger:0.02,
            ease: "expo.inOut"
        });
        // if(isAnimIn) {
        //     obj.rotate = 45;
        // } else
        // {
        //     obj.y = 100
        // }
    }
}