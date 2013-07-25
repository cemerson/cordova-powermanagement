/*
 * Copyright (C) 2011-2012 Wolfgang Koller
 * 
 * This file is part of GOFG Sports Computer - http://www.gofg.at/.
 * 
 * GOFG Sports Computer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * GOFG Sports Computer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with GOFG Sports Computer.  If not, see <http://www.gnu.org/licenses/>.
 */

function powerMgmtError(error){ report('ERROR','powerMgmtError() [error(' + error + ')]'); }
function powerMgmtSuccess(success){	report('TEST','powerMgmtSuccess() success: ' + powerMgmtSuccess + '...');}

/* ----------------------------------------------------------- /
    PWpreventAutoLock
/ ----------------------------------------------------------- */
function PWpreventAutoLock(){
    if(cordovaIsLoaded) report('TEST','--> PWpreventAutoLock()..'); 
    try{
        if(cordovaIsLoaded && isMobile.any()) cordova.require('cordova/plugin/powermanagement').acquire( powerMgmtSuccess, powerMgmtError );                                                
    }catch(e){ catchError('PWpreventAutoLock()',e); }           
}       

/* ----------------------------------------------------------- /
    PWpreventAutoLockButAllowDim
/ ----------------------------------------------------------- */
function PWpreventAutoLockButAllowDim(){
    if(cordovaIsLoaded) report('TEST','--> PWpreventAutoLockButAllowDim()..');  
    try{
        if(cordovaIsLoaded && isMobile.any()) cordova.require('cordova/plugin/powermanagement').dim( powerMgmtSuccess, powerMgmtError ); 
    }catch(e){ catchError('PWpreventAutoLockButAllowDim()',e); }            
}       

/* ----------------------------------------------------------- /
    PWreenableAutoLock
/ ----------------------------------------------------------- */
function PWreenableAutoLock(){
    if(cordovaIsLoaded) report('TEST','--> PWreenableAutoLock()..');    
    try{
        if(cordovaIsLoaded && isMobile.any()) cordova.require('cordova/plugin/powermanagement').release( powerMgmtSuccess, powerMgmtError ); 
    }catch(e){ catchError('PWreenableAutoLock()',e); }          
}       


cordova.define("cordova/plugin/powermanagement", function(require, exports, module) {   // (function(cordova) {
	
	var exec = require('cordova/exec');
	
	var PowerManagement = function() {};
	
	/**
	 * Acquire a new wake-lock (keep device awake)
	 * 
	 * @param successCallback function to be called when the wake-lock was acquired successfully
	 * @param errorCallback function to be called when there was a problem with acquiring the wake-lock
	 */
	PowerManagement.prototype.acquire = function(successCallback,failureCallback) {
	    exec(powerMgmtSuccess, powerMgmtError, 'PowerManagement', 'acquire', []);
	}

	/**
	 * Release the wake-lock
	 * 
	 * @param successCallback function to be called when the wake-lock was released successfully
	 * @param errorCallback function to be called when there was a problem while releasing the wake-lock
	 */
	PowerManagement.prototype.release = function(successCallback,failureCallback) {
	    exec(powerMgmtSuccess, powerMgmtError, 'PowerManagement', 'release', []);
	}

	/**
	 * Acquire a partial wake-lock, allowing the device to dim the screen
	 *
	 * @param successCallback function to be called when the wake-lock was acquired successfully
	 * @param errorCallback function to be called when there was a problem with acquiring the wake-lock
	 */
	PowerManagement.prototype.dim = function(successCallback,failureCallback) {
	    exec(powerMgmtSuccess, powerMgmtError, 'PowerManagement', 'acquire', [true]);
	}
		
	var powermanagement = new PowerManagement();
	module.exports = powermanagement;
	
})(window.cordova || window.Cordova);



/* DEBUG */ window.console.log('PowerManagement.js loaded...');