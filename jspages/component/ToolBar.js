import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ViewPropTypes,
    Platform,
    StatusBar
} from 'react-native';
import PropTypes from 'prop-types';
const NAV_BAR_HEIGHT_ANDROID=50;
const NAV_BAR_HEIGHT_IOS=44;
const STATUS_BAR_HEIGHT=20;
const statusBarShape={
    backgroundColor:PropTypes.string,
    barStyle:PropTypes.oneOf(['default', 'light-content', 'dark-content']),
    hidden:PropTypes.bool
}
export default class ToolBar extends Component {
    static propTypes = {
        style:ViewPropTypes.style,
        title:PropTypes.string,
        titleView:PropTypes.element,
        hide:PropTypes.bool,
        leftButton:PropTypes.element,
        rightButton:PropTypes.element,
        statusBar:PropTypes.shape(statusBarShape)
    }
    static defaultProps = {
      statusBar:{
        barStyle:'light-content',
        hidden:true,
        backgroundColor:'red'
      } 
    }
    constructor(props){
        super(props);
        this.state={
            title:'',
            hide:false,
        }
    }

    render() {
        let status=<View style={[styles.statusBar,this.props.statusBar]}>
        <StatusBar {...this.props.StatusBar}/>
        </View>
        let titleView=this.props.titleView?this.props.titleView:<Text style={styles.title}>{this.props.title}</Text>
        let leftButton=this.props.leftButton?this.props.leftButton:<Text></Text>;
        let rightButton=this.props.rightButton;
        let content = <View style={styles.NavBar}>
             {leftButton}
            <View style={styles.titleViewContainer}>
               {titleView}
            </View>
            {rightButton}
        </View>
        return (
            <SafeAreaView style={[styles.container,this.props.style]}>
            {status}
            {content}
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'gray',
    },
    NavBar:{
        justifyContent:'space-between',
        alignItems:'center',
        height:Platform.OS==='ios'?NAV_BAR_HEIGHT_IOS:NAV_BAR_HEIGHT_ANDROID,
        flexDirection:'row'
    },
    titleViewContainer:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:40,
        right:40,
        top:0,
        bottom:0
    },
    title:{
        fontSize:16,
        fontWeight:'900',
        color:'#FFFAFA'
    },
    statusBar:{
        height:Platform.OS==='ios'?STATUS_BAR_HEIGHT:0,
    }
})