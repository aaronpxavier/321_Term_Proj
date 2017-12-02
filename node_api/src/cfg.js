/**
 * Application Configuration
 */

// Configuration Object -----------------------------------------------------//

let port;

process.env.PORT ? port = process.env.PORT : port = 8080;

const config = {
    port: port, // server port to listen on
    mode: 'dev',
    db_host: 'mongodb://localhost/321_TERM_PROJ_DB',
}; // end config

// Exports ------------------------------------------------------------------//

export default config;