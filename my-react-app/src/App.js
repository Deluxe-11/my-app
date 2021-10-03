import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React, {Suspense} from 'react';
import routes from "@/routes";

function App() {
    return (
        <Suspense fallback={<div>IS LOADING</div>}>

            <BrowserRouter>
                <Switch>
                    {routes.map((route) => (
                        <Route
                            path={route.path}
                            key={route.path}
                            component={route.component}
                            {...route}
                        />
                    ))}
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
