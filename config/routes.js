const express = require('express')

module.exports = function (server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    router.route('/teste').get(function(req, res, next){
        res.send('funcionou')
    })

    // rotas da API
    const billingCycleServise = require('../api/billingCycle/billingCycleService')
    billingCycleServise.register(router, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
}