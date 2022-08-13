const button = {
    operator: () => {},

    tagName: 'button',
    innerHTML: 'Start',
    style: {
        color: 'red',
    },

    oncreate: (self, props) => {
        self.onclick = () => {
            console.log('clicked')
        }
    }

}


export default button