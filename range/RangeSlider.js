$(document).ready(function(){
	$.fn.RangeSlider = function(cfg){
    this.sliderCfg = {
        min: cfg && !isNaN(parseFloat(cfg.min)) ? Number(cfg.min) : null, 
        max: cfg && !isNaN(parseFloat(cfg.max)) ? Number(cfg.max) : null,
        step: cfg && Number(cfg.step) ? cfg.step : 1,
        callback: cfg && cfg.callback ? cfg.callback : null
    };
    var $input = $(this);
    var min = this.sliderCfg.min;
    var max = this.sliderCfg.max;
    var step = this.sliderCfg.step;
    var callback = this.sliderCfg.callback;
    $input.attr('min', min)
        .attr('max', max)
        .attr('step', step);

    $input.bind("input", function(e){
        $input.attr('value', this.value);
        // $input.css( 'background', 'linear-gradient(to right, #059CFA, white ' + this.value + '%, white)' );
        $input.css( 'background-size', this.value + '% 100%' ); 
        if ($.isFunction(callback)) {
            callback(this);
            }
        });
    };

    var change = function($input) {
        /*内容可自行定义*/
        console.log("123");
    }
    $('input').RangeSlider({ min: 0,   max: 100,  step: 0.1,  callback: change});
})