import React, {Fragment} from 'react';
import Card from '../components/Card'

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=5d7ca768';

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            searchTerm: '',
            error: ''
        }
    }

    async componentDidMount() {
        const res = await fetch(`${API}&s=avengers`);
        const resJSON = await res.json();

        this.setState({data: resJSON.Search});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.searchTerm) {
            return this.setState({error: 'please write a valid text'});
        }
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                    <a className="navbar-brand" href="#">
                        CINEMA ID
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    News
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0" onSubmit={e => this.handleSubmit(e)}>
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                                onChange={e => this.setState({searchTerm: e.target.value})}
                                autoFocus
                            />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </nav>

                <div className="d-flex flex-row-reverse">
                    <p className="text-white">{ (this.state.error) ? this.state.error : '' }</p>
                </div>

                <div className="row">
                    {
                        this.state.data.map(movie => {
                            return <Card movie={movie}/>
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default List;