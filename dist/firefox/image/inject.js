(()=>{URL.revokeObjectURL=function(t){return!0};var o=CanvasRenderingContext2D.prototype.drawImage,s={};CanvasRenderingContext2D.prototype.drawImage=function(...t){if(t[1]+t[2]+t[3]+t[4]==0)return null;let a=this.canvas.args||[];a.push(t.slice(1)),this.canvas.args=a;let n=t[0].src;return this.canvas.url=n,clearTimeout(s[n]),s[n]=setTimeout(()=>{let e=this.canvas.args,r=this.canvas.url;if(e.length<2)return null;let i={url:r,args:e};this.canvas.setAttribute("data",btoa(JSON.stringify(i)))},1e3),o.apply(this,t)};})();
