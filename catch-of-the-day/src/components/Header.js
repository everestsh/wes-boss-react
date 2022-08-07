import React, {Component} from "react";

// class Header extends Component {
//     render(){
//         return(
//             <header className="top">
//                 <h1>Catch 
//                     <span className="ofThe">
//                         <span className="of">of</span>
//                         <span className="the">the</span>
//                     </span>
//                      day
//                 </h1>
//                 <h3 className="tagline">
//                     {/* <span>Fresh Seafood Market</span> */}
//                     <span>{this.props.tagline}</span>
//                 </h3>
//             </header>
//         )
//     }
// }

// function Header(props) {
//     return(
//         <header className="top">
//             <h1>Catch 
//                 <span className="ofThe">
//                     <span className="of">of</span>
//                     <span className="the">the</span>
//                 </span>
//                     day
//             </h1>
//             <h3 className="tagline">
//                 {/* <span>Fresh Seafood Market</span> */}
//                 <span>{props.tagline}</span>
//             </h3>
//         </header>
//     )
// }
const Header = ({tagline, age}) => (
    <header className="top">
        <h1>Catch 
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>
            </span>
                day
        </h1>
        <h3 className="tagline">
            {/* <span>Fresh Seafood Market</span> */}
            <span>{tagline} {age}</span>
        </h3>
    </header>
)

export default Header;