import React from 'react';

const intro = ( { history } ) => {

    return (
        <div>
            <h3> Intro 화면! 여기다 구현하면 됩니당 </h3>
            <button onClick={ () => {history.push("/login")}}> start </button>
        </div>
    );
}

export default intro;