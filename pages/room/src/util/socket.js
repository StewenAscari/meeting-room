class SocketBuilder{
    constructor({sockerUrl}){
        this.sockerUrl = sockerUrl
        this.onUserConnected = () => {}
        this.onUserDisconnected = () => {}
    }

    setOnUserConnected(fn){
        this.onUserConnected = fn
        return this 

    }

    setOnUserDisconnected(fn){
        this.onUserDisconnected = fn
        return this 

    }

    build(){
        const socket = io.connect(this.sockerUrl, {
            withCredentials: false
        })

        socket.on('user-connected', this.onUserConnected)
        socket.on('user-disconnected', this.onUserDisconnected)

        return socket
    }
}