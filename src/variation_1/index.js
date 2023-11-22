import "./index.css"
import { Variant } from "../norman"
import { ExtractVariantName } from "../norman/ExtractVariantName"

const conditions = _ => {
    let conditions = [
        !!document.querySelector(`body`),
        !!document.querySelector(`.AMP-ribbon-banner__item [href^="/shop/en/pets/delivery"]`),
    ]
    return conditions.every(a => a)
}

function action() {
    this.log("Action loaded")
    let desktop_image = `https://editor-assets.abtasty.com/47297/655dce5b55bcf1700646491.jpg`
    let mobile_image = `https://editor-assets.abtasty.com/47297/655dce74e46641700646516.jpg`
    console.warn(this)
    let target = document.querySelector(`.AMP-ribbon-banner__item [href^="/shop/en/pets/delivery"]`)
    target.innerHTML = `<picture>
        <source srcset="${desktop_image}" media="(min-width: 650px)" />
        <img src="${mobile_image}" alt="Free home delivery in 4 working days whenm you spend £45+" />
    </picture>`
}

function fallback() {
    this.log("Test can't run, fallback loaded", true)
}

const variation = new Variant(TEST, ExtractVariantName(__dirname), conditions, action, fallback)
variation.run()