



const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

  // const sockerUrl = 'http://localhost:3000'

  const sockerUrl = 'https://serene-brook-26381.herokuapp.com/'

  const socketBuilder = new SocketBuilder({sockerUrl})

  const peerConfig = Object.values({
    id:undefined,
    config: {
      host: 'whispering-shore-64881.herokuapp.com',
      secure: true,
      // port: 9000,
      // host: 'localhost',
      path: '/'
    }

  })
  const peerBuilder = new PeerBuilder({ peerConfig })

  const view = new View()
  const media = new Media() 
  const deps = {
    view,
    media,
    room,
    socketBuilder,
    peerBuilder
  }

  Business.initialize(deps)
  // view.renderVideo({userId : 'test01', url: 'https://media.giphy.com/media/93lEtAaPJA3ktBPkS9/giphy.mp4'})
  // view.renderVideo({userId : 'test01', isCurrentId: true, url: 'https://media.giphy.com/media/93lEtAaPJA3ktBPkS9/giphy.mp4'})
  // view.renderVideo({userId : 'test02', url: 'https://media.giphy.com/media/93lEtAaPJA3ktBPkS9/giphy.mp4'})

}

window.onload = onload