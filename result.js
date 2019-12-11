var JSONObject=
[
    {
        "suite_name":"mcore_suite",
        "test_case":[
            {
                "name":"test mcore md5 ex enctypt",
                "time":64,
                "result":"success"
            },
            {
                "name":"test mcore md5 ex enctypt hex",
                "time":5,
                "result":"success"
            },
            {
                "name":"test mcore base64",
                "time":19,
                "result":"success"
            },
            {
                "name":"test mcore avl",
                "time":6,
                "result":"success"
            },
            {
                "name":"test mcore mqsort ex",
                "time":469,
                "result":"success"
            },
            {
                "name":"test mcore bpnn",
                "time":208,
                "result":"success"
            },
            {
                "name":"test mcore extract time",
                "time":4,
                "result":"success"
            },
            {
                "name":"test mcore hash",
                "time":4,
                "result":"success"
            },
            {
                "name":"test mcore img file",
                "time":5,
                "result":"success"
            },
            {
                "name":"test mcore mhash",
                "time":4,
                "result":"success"
            },
            {
                "name":"test mcore mevent",
                "time":1005,
                "result":"success"
            },
            {
                "name":"test mcore mlock",
                "time":5,
                "result":"success"
            },
            {
                "name":"test mcore mparams",
                "time":5,
                "result":"success"
            },
            {
                "name":"test mcore share mem",
                "time":44,
                "result":"success"
            },
            {
                "name":"test mcore str num",
                "time":5,
                "result":"success"
            },
            {
                "name":"test mcore url",
                "time":4,
                "result":"success"
            },
            {
                "name":"test mcore json",
                "time":4,
                "result":"success"
            },
            {
                "name":"test mcore xml",
                "time":5,
                "result":"success"
            }
        ],
        "total":18,
        "success":18,
        "failure":0
    },
    {
        "suite_name":"mdps_suite",
        "test_case":[
            {
                "name":"test_mdps basic all",
                "time":1786,
                "result":"success"
            }
        ],
        "total":1,
        "success":1,
        "failure":0
    },
    {
        "suite_name":"mnetdet_suite",
        "test_case":[
            {
                "name":"test mnetdet test_us_list",
                "time":58069,
                "result":"failure",
                "cause":"mtest run case memory leaked"
            }
        ],
        "total":1,
        "success":0,
        "failure":1
    },
    {
        "suite_name":"smss_suite",
        "test_case":[
            {
                "name":"test smss illegal params",
                "time":13,
                "result":"success"
            },
            {
                "name":"test smss destory",
                "time":16,
                "result":"success"
            },
            {
                "name":"test smss unknow stor create",
                "time":8,
                "result":"success"
            },
            {
                "name":"test smss unknow stor format",
                "time":10,
                "result":"success"
            },
            {
                "name":"test smss formated stor create",
                "time":8,
                "result":"success"
            },
            {
                "name":"test smss cluster operator",
                "time":43,
                "result":"success"
            },
            {
                "name":"test smss segment operate",
                "time":102,
                "result":"success"
            },
            {
                "name":"test smss seg direct read",
                "time":63,
                "result":"success"
            },
            {
                "name":"test smss seg multi write",
                "time":126,
                "result":"success"
            },
            {
                "name":"test smss seg write multi type",
                "time":23,
                "result":"success"
            },
            {
                "name":"test smss seg multi read",
                "time":139,
                "result":"success"
            },
            {
                "name":"test smss seg write at cluster full",
                "time":59,
                "result":"success"
            },
            {
                "name":"test smss seg direct del",
                "time":97,
                "result":"failure",
                "cause":"mtest run suite waitpid() failed"
            },
            {
                "name":"test smss seg del all",
                "time":129,
                "result":"success"
            },
            {
                "name":"test smss seg del unin range",
                "time":32,
                "result":"success"
            },
            {
                "name":"test smss seg del in range",
                "time":123,
                "result":"success"
            },
            {
                "name":"test smss seg search",
                "time":112,
                "result":"success"
            },
            {
                "name":"test smss seg search bytime",
                "time":63,
                "result":"success"
            },
            {
                "name":"test smss seg list",
                "time":77,
                "result":"success"
            },
            {
                "name":"test smss cache seg list",
                "time":125,
                "result":"success"
            },
            {
                "name":"test smss cluster recover at broken seg index",
                "time":86,
                "result":"success"
            },
            {
                "name":"test smss cluster recover at broken stat",
                "time":58,
                "result":"success"
            },
            {
                "name":"test smss cluster recover at broken cluster meta",
                "time":93,
                "result":"success"
            },
            {
                "name":"test smss cluster recover at broken cluster info",
                "time":75,
                "result":"failure",
                "cause":"mtest run suite fork() failed"
            },
            {
                "name":"test smss cluster new field add",
                "time":146,
                "result":"success"
            },
            {
                "name":"test smss cluster write permit check",
                "time":199,
                "result":"success"
            },
            {
                "name":"test smss cluster info check",
                "time":64,
                "result":"success"
            }
        ],
        "total":27,
        "success":27,
        "failure":0
    },
    {
        "suite_name":"mmec_suite",
        "test_case":[
            {
                "name":"test rtmp h264 to h264",
                "time":17161,
                "result":"success"
            }
        ],
        "total":1,
        "success":1,
        "failure":0
    },
    {
        "suite_name":"mmpegts_suite",
        "test_case":[
            {
                "name":"test mmpegts",
                "time":468,
                "result":"failure",
                "cause":"mtest run case killed by signal "
            }
        ],
        "total":1,
        "success":1,
        "failure":0
    },
    {
        "suite_name":"frtmp_suite",
        "test_case":[
            {
                "name":"test frtmp h265",
                "time":9878,
                "result":"success"
            }
        ],
        "total":1,
        "success":1,
        "failure":0
    },
    {
        "suite_name":"frtsp_suite",
        "test_case":[
            {
                "name":"test frtsp",
                "time":7159,
                "result":"success"
            }
        ],
        "total":1,
        "success":1,
        "failure":0
    },
    {
        "suite_name":"mip_merge_suite",
        "test_case":[
            {
                "name":"test mip_merge test1",
                "time":5125,
                "result":"success"
            }
        ],
        "total":1,
        "success":1,
        "failure":0
    },
    {
        "suite_name":"test_mtest_suite",
        "test_case":[
            {
                "name":"test mtest fork returned success",
                "time":5,
                "result":"success"
            },
            {
                "name":"test mtest fork returned success",
                "time":4,
                "result":"failure"
            },
            {
                "name":"test mtest fork returned failure",
                "time":2,
                "result":"failure",
                "cause":"mtest run case returned -1"
            },
            {
                "name":"test mtest fork killed by signal",
                "time":2,
                "result":"failure",
                "cause":"mtest run case killed by signal 11"
            },
            {
                "name":"test mtest fork memory leaked",
                "time":5,
                "result":"failure",
                "cause":"mtest run case memory leaked"
            },
            {
                "name":"test mtest fork socket opened",
                "time":4,
                "result":"failure",
                "cause":"mtest run case socket opened"
            },
            {
                "name":"test mtest fork socket closed",
                "time":5,
                "result":"success"
            },
            {
                "name":"test mtest fork returned success",
                "time":6,
                "result":"success"
            },
            {
                "name":"test mtest fork returned success",
                "time":5,
                "result":"success"
            }
        ],
        "total":9,
        "success":9,
        "failure":0
    }
]