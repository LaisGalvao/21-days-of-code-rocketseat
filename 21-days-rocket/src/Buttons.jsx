import "./Buttons.css"

let btns = [
    {
        id: 1,
        txt: "Dia 1",
        link: "https://github.com/LaisGalvao/21-days-of-code-rocketseat",
        target: "_blank"
    },
    {
        id: 2,
        txt: "Dia 2",
        link: "https://21-days-of-code-day2.netlify.app/",
        target: "_blank"
    },
    {
        id: 3,
        txt: "Dia 3",
        link: "https://21-days-of-code-day3.netlify.app/",
        target: "_blank"
    },
    {
        id: 4,
        txt: "Dia 4",
        link: "",
        target: ""
    }
]

let listBtn = btns.map((b, index) => {
    return (<button key={index} className="btn-day">
        <a href={b.link} target={b.target}>
            <code>{b.txt}</code>
        </a>
    </button>)
})

export function Buttons() {
    return (
        <div className="btn-wrapper">
            {listBtn}
        </div>
    )
}