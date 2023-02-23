# UUID - creates unique IDs
 -npm install uuid

 # Express Router - enables us to modularize our routes in express

 # URL Parameter
    Placeholder for data

# Parts of an URL
    Base - amazon.com
    Endpoint - amazon.com/images
    Parameter - amazon.com/images/98891293xysgsd332
    Query

# URL Queries

    # Query String
    Begins with the ?
    Built of key=value pairs.
    Multiple queries separated by the &


# Middleware

    What is it?
    * app.use("/") (if u leave out the slash or endpoint it will fire on every request)
    1. (optional) - Mount Path (endpoint)
    2. Callbuack function - receives the request, response objects, also the 'next' function

    # The 'next' function
        * Moves on to the next middleware in line on our server