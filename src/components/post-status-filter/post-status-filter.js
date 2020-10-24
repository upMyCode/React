import React from 'react';
import './post-status-filter.css';


// class DoThis extends Component {
//     constructor (props){
//         super (props);
//         this.state = {
//             years: 26
//         }
//         this.nextYear = this.nextYear.bind(this);
//     }

//     nextYear() {
//         console.log(1);
//         this.setState(state => ({
//             years: ++state.years
//         }))
//     }

//     render() {
//         const {name, age, phone,} = this.props;
//         const {years} = this.state;
//         return(
//             <>
//                 <button onClick={this.nextYear}>++</button>
//                 <p>Hello {name}, {years}</p>
//             </>
//         )
//     }
// }


const PostStatusFilter = ()=> {
    return (
        <div className="btn-group">
            <button type="button" className='btn btn-info'>Все</button>
            <button type="button" className='btn btn-outline-secondary'>Понравилось</button>
        </div>

    )
}


export default PostStatusFilter;
