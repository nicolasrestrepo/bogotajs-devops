'use strict'

const test = require('ava')
const request = require('supertest')
const server = require('../server')

test.serial.cb('should serve html on index', t => {
    request(server)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .end((err, res) => {
                t.falsy(err, 'should not return an error')
                let body = res.body
                t.truthy(body);
                t.end()
            })
})