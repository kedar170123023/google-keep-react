import React from 'react';
import Button from "@material-ui/core/Button";

export default function Header() {
    return (
        <>
        
            <div className="header">
                <div className="left-header">
                    <h1>Keep</h1>
                </div>
                <div className="right-header">
                <Button variant="contained" color="secondary">
                    Run Online
                </Button>
                <Button variant="contained" color="secondary">
                    Run offline
                </Button>

                </div>
                
            </div>
        </>
    )
}
