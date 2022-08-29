import React, { Component } from "react"
import Observer from "@researchgate/react-intersection-observer"



class ImpressionClickTrackerHOC extends Component {
    handleChange = (event, unobserve) => {
        // if (event.isIntersecting && event.intersectionRatio >= 1) {
        //     this.recordedTimeout = setTimeout(() => {
        //         var url = `${config.protocol}://${config.hostName}:${config.serverPort}/api/vendor/impressions/add`
        //         request.post(url, { json: { vendorId: event.target.getAttribute('cardId') } }, (error, res, body) => {})

        //         if (event.isIntersecting) {
        //             unobserve()
        //         }
        //     }, 500)
        //     return
        // }
        // clearTimeout(this.recordedTimeout)
    }
    
    render() {
        return (
            <Observer 
                onChange={this.handleChange}
                threshold={1}
                disabled={this.props.disableViewportTracking || false}
            >
                {React.cloneElement(this.props.children)}
            </Observer>
        )
    }
}
export default ImpressionClickTrackerHOC