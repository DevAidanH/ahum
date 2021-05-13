const about = document.querySelector("#about")
const contact = document.querySelector("#contact")
const aboutContent = document.querySelector("#about-content")
const contactContent = document.querySelector("#contact-content")

about.addEventListener("click", () => {
    
    const aboutBox = new WinBox({
        title: "ahum/about-Me",
        width: "400px",
        height: "400px",
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
        mount: aboutContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        }
    })
})
contact.addEventListener("click", () => {
    const contactBox = new WinBox({
        title: "ahum/contact-Me",
        background: "#00aa00",
        width: "400px",
        height: "400px",
        top: 15,
        right: 10,
        bottom: 10,
        left: 10,
        mount: contactContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        }
    })
})