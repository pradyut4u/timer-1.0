class Form{
    constructor(){
        this.signIn=createButton('Sign In')
        this.signInn=createElement('h2')
        this.accept=createButton('Accept')
        this.eMail=createInput('Email address')
        this.password=createInput('Password')
    }
    hide(){
    this.accept.hide()
    this.eMail.hide()
    this.password.hide()
}
    display(){
        this.signInn.html("Sign In")
        stroke("white")
        this.signInn.position(500,100)
        this.signIn.position(500,300)

        this.signIn.mousePressed(()=>{
             this.signIn.hide()
             this.signInn.hide()
            this.accept.position(500,800)
            this.eMail.position(500,400)
            this.password.position(500,600)
        })

    }
}