import React from 'react';
import { render } from '@testing-library/react';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''};

        this.typeValue = this.typeValue.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    typeValue(event) {
        this.setState({
            value: event.target.value
        })
    }

    submitForm(event) {
        console.log('Perfil a ser buscado: ' + this.state.value)
        event.preventDefault();

        if (this.state.value == '') {
            alert('Digite alguma coisa!')
        } else {
            window.location.href = "/feed?profile="+this.state.value
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Home Page
                </h1>

                <form onSubmit={this.submitForm}>
                    <label>
                        Perfil:
                        <input type="text" value={this.state.value} onChange={this.typeValue} />
                    </label>
                    <input type="submit" value="Trazer feed" />
                </form>
            </div>
        )
    }
}

class Info extends React.Component {

    testeFuncao() {
        return <div>otro</div>
    }

    render() {
        return <div>otro</div>
    }
}

export default Home
export {Info}