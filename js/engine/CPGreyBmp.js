/*
	ChibiPaint
    Copyright (c) 2006-2008 Marc Schefer

    This file is part of ChibiPaint.

    ChibiPaint is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    ChibiPaint is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with ChibiPaint. If not, see <http://www.gnu.org/licenses/>.

 */

function CPGreyBmp(width, height) {
    "use strict";
    
    width = width | 0;
    height = height | 0;

    this.width = width;
    this.height = height;
    
    this.data = new UInt8Array(width * height);

    this.clone = function() {
        var
            result = new CPGreyBmp(this.width, this.height);
        
        for (var i = 0; i < this.data.length; i++) {
            result.data[i] = this.data[i];
        }
        
        return result;
	};

	this.mirrorHorizontally = function() {
		var
		    newData = new UInt8Array(width * height); //TODO we don't need to allocate new memory for this operation!

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				newData[y * width + x] = this.data[y * width + width - x - 1];
			}
		}

		this.data = newData;
	};

	this.applyLUT = function(lut) {
		for (var i = 0; i < this.data.length; i++) {
			data[i] = lut.table[this.data[i]];
		}
	};
}