/*
 * File: c:\Users\grosales\Documents\Node.js-class\Section 3\index.js
 * Project: c:\Users\grosales\Documents\Node.js-class\Section 3
 * Created Date: Tuesday, February 26th 2019, 7:57:41 am
 * Author: Gabriel Rosales
 * -----
 * Date Modified: 02/26/2019, 8:36:56
 * Modified By: Gabriel Rosales
 * -----
 * Copyright (c) 2019 Avuncular Digital
 * MIT License
 * 
 * Copyright (c) 2019 Avuncular Digital
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 * 2019-02-26	GOR	This file is following along in Section 3 of Node.js Masterclass
 */

// Dependencies
const http = require('http');
const url = require('url');

const server = http.createServer(function(req,res) {
    
    // Get the URl and parse it
    let parsedUrl = url.parse(req.url, true);

    // Get the path
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // Send the response
    res.end('Hello World \n');

    // Log the request
    console.log('request received on path:'+ trimmedPath);
    
});

server.listen(8000, function() {
    console.log('The server is listening on 8000');
})