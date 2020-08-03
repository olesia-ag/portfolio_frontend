import React from 'react'



class MediumDisplay extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          requestFailed: false,
          active: 0
        }
      }
    render() {
        return (
            <div>medium articles will be here</div>
        )
    }
}

export default MediumDisplay