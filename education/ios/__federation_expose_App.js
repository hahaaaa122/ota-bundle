(self["webpackChunkeducation"] = self["webpackChunkeducation"] || []).push([["__federation_expose_App"], {
"./src/App.tsx": (function (__unused_rspack_module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return EducationRemoteApp;
    }
}));
var _interop_require_wildcard = __webpack_require__("../../node_modules/.pnpm/@swc+helpers@0.5.21/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs");
var _sliced_to_array = __webpack_require__("../../node_modules/.pnpm/@swc+helpers@0.5.21/node_modules/@swc/helpers/cjs/_sliced_to_array.cjs");
var _jsxruntime = __webpack_require__("../../node_modules/.pnpm/react@19.2.3/node_modules/react/jsx-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__("webpack/sharing/consume/default/react/react"));
var _reactnative = __webpack_require__("webpack/sharing/consume/default/react-native/react-native");
var COURSES = [
    {
        id: '1',
        title: 'React Native Fundamentals',
        instructor: 'John Smith',
        duration: '12h',
        progress: 65,
        color: '#0369A1'
    },
    {
        id: '2',
        title: 'TypeScript Deep Dive',
        instructor: 'Jane Doe',
        duration: '8h',
        progress: 30,
        color: '#7C3AED'
    },
    {
        id: '3',
        title: 'Module Federation Patterns',
        instructor: 'Bob Lee',
        duration: '6h',
        progress: 0,
        color: '#0F766E'
    },
    {
        id: '4',
        title: 'Super App Architecture',
        instructor: 'Alice Chen',
        duration: '10h',
        progress: 0,
        color: '#B45309'
    }
];
var CourseCard = (ref)=>{
    var item = ref.item;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactnative.TouchableOpacity, {
        style: [
            styles.courseCard,
            {
                borderLeftColor: item.color
            }
        ],
        onPress: ()=>_reactnative.Alert.alert(item.title, `Instructor: ${item.instructor}\nDuration: ${item.duration}`),
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactnative.View, {
                style: styles.courseHeader,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactnative.View, {
                        style: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                                style: styles.courseTitle,
                                children: item.title
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)(Text, {
                                style: styles.courseInstructor,
                                children: [
                                    item.instructor,
                                    " • ",
                                    item.duration
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                        style: [
                            styles.progressText,
                            {
                                color: item.color
                            }
                        ],
                        children: item.progress > 0 ? `${item.progress}%` : 'Start'
                    })
                ]
            }),
            item.progress > 0 && /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactnative.View, {
                style: styles.progressBarContainer,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactnative.View, {
                    style: [
                        styles.progressBar,
                        {
                            width: `${item.progress}%`,
                            backgroundColor: item.color
                        }
                    ]
                })
            })
        ]
    });
};
// Inline Text component to avoid needing react-native-paper in the remote
var Text = (ref)=>{
    var style = ref.style, children = ref.children;
    var RNText = (__webpack_require__("webpack/sharing/consume/default/react-native/react-native")/* .Text */.Text);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(RNText, {
        style: style,
        children: children
    });
};
function EducationRemoteApp(ref) {
    var onBack = ref.onBack;
    var _useState = _sliced_to_array._((0, _react.useState)('enrolled'), 2), activeTab = _useState[0], setActiveTab = _useState[1];
    var enrolledCourses = COURSES.filter((c)=>c.progress > 0);
    var displayCourses = activeTab === 'enrolled' ? enrolledCourses : COURSES;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactnative.ScrollView, {
        style: styles.container,
        contentInsetAdjustmentBehavior: "automatic",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactnative.View, {
                style: styles.header,
                children: [
                    onBack && /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactnative.TouchableOpacity, {
                        style: styles.backButton,
                        onPress: onBack,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                            style: styles.backText,
                            children: "← Back"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                        style: styles.headerTitle,
                        children: "\uD83D\uDCDA Education v2"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)(Text, {
                        style: styles.headerSubtitle,
                        children: [
                            enrolledCourses.length,
                            " enrolled • ",
                            COURSES.length,
                            " total courses"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactnative.View, {
                style: styles.statsRow,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactnative.View, {
                        style: styles.statCard,
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                                style: styles.statValue,
                                children: "\uD83D\uDD25 7"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                                style: styles.statLabel,
                                children: "Day Streak"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactnative.View, {
                        style: styles.statCard,
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                                style: styles.statValue,
                                children: "⏱ 4.5h"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                                style: styles.statLabel,
                                children: "This Week"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactnative.View, {
                        style: styles.statCard,
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                                style: styles.statValue,
                                children: "\uD83C\uDFC6 3"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                                style: styles.statLabel,
                                children: "Completed"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactnative.View, {
                style: styles.tabs,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactnative.TouchableOpacity, {
                        style: [
                            styles.tab,
                            activeTab === 'enrolled' && styles.tabActive
                        ],
                        onPress: ()=>setActiveTab('enrolled'),
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                            style: [
                                styles.tabText,
                                activeTab === 'enrolled' && styles.tabTextActive
                            ],
                            children: "In Progress"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactnative.TouchableOpacity, {
                        style: [
                            styles.tab,
                            activeTab === 'all' && styles.tabActive
                        ],
                        onPress: ()=>setActiveTab('all'),
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Text, {
                            style: [
                                styles.tabText,
                                activeTab === 'all' && styles.tabTextActive
                            ],
                            children: "All Courses"
                        })
                    })
                ]
            }),
            displayCourses.map((course)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(CourseCard, {
                    item: course
                }, course.id))
        ]
    });
}
var styles = _reactnative.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc'
    },
    header: {
        padding: 20,
        paddingTop: 16,
        backgroundColor: '#0369A1'
    },
    backButton: {
        marginBottom: 10,
        alignSelf: 'flex-start'
    },
    backText: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 15,
        fontWeight: '500'
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4
    },
    headerSubtitle: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.8)'
    },
    statsRow: {
        flexDirection: 'row',
        padding: 16,
        gap: 8
    },
    statCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2
    },
    statLabel: {
        fontSize: 11,
        color: '#888'
    },
    tabs: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginBottom: 8
    },
    tab: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent'
    },
    tabActive: {
        borderBottomColor: '#0369A1'
    },
    tabText: {
        fontSize: 14,
        color: '#888'
    },
    tabTextActive: {
        color: '#0369A1',
        fontWeight: '600'
    },
    courseCard: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 10,
        borderRadius: 12,
        padding: 14,
        borderLeftWidth: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2
    },
    courseHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    courseTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 3
    },
    courseInstructor: {
        fontSize: 12,
        color: '#888'
    },
    progressText: {
        fontWeight: '700',
        fontSize: 14,
        marginLeft: 8
    },
    progressBarContainer: {
        height: 4,
        backgroundColor: '#E2E8F0',
        borderRadius: 2,
        marginTop: 10
    },
    progressBar: {
        height: 4,
        borderRadius: 2
    }
});


}),

}]);//# sourceMappingURL=__federation_expose_App.js.map?platform=ios