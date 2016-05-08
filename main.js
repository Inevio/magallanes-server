#! /usr/bin/env node
'use strict'

// Global modules
require('./mysql');

// Modules
var vertigo = require('vertigo');

// Create server
var server = vertigo.createServer( 21042 );

// Listen petitions
server.on( 'nodes', require('./cmd/nodes') );
server.on( 'nodeByName', require('./cmd/nodeByName') );
server.on( 'nodeByIP', require('./cmd/nodeByIP') );
server.on( 'addNode', require('./cmd/addNode') );
server.on( 'addNodeWithName', require('./cmd/addNodeWithName') );
server.on( 'removeNode', require('./cmd/removeNode') );
server.on( 'removeNodeByName', require('./cmd/removeNodeByName') );
server.on( 'addImageToAllNodes', require('./cmd/addImageToAllNodes') );
server.on( 'removeImageFromAllNodes', require('./cmd/removeImageFromAllNodes') );
server.on( 'addImageToNodeByIP', require('./cmd/addImageToNodeByIP') );
server.on( 'addImageToNodeByName', require('./cmd/addImageToNodeByName') );
server.on( 'removeImageByNodeByIP', require('./cmd/removeImageByNodeByIP') );
server.on( 'removeImageByNodeByName', require('./cmd/removeImageByNodeByName') );
server.on( 'updateAllImagesOfAllNodes', require('./cmd/updateAllImagesOfAllNodes') );
server.on( 'updateImageOfAllNodes', require('./cmd/updateImageOfAllNodes') );
server.on( 'updateImageOfNode', require('./cmd/updateImageOfNode') );
server.on( 'scaleImageInAllNode', require('./cmd/scaleImageInAllNode') );
server.on( 'scaleImageInNodeByIP', require('./cmd/scaleImageInNodeByIP') );
server.on( 'scaleImageInNodeByName', require('./cmd/scaleImageInNodeByName') );
server.on( 'registerService', require('./cmd/registerService') );
server.on( 'monitorUpdate', require('./cmd/monitorUpdate') );