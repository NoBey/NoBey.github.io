function Window() {
    var win = $(window);
    this.Width = win.width();
    this.Height = win.height();
}
Window.prototype = {
    itemLeft: function (W) {
        return (this.Width - W) / 2;
    },
    itemTop: function (H) {
        return (this.Height - H) / 2;
    }
};
(function () {
    $.extend({
        showWin: function (opts) {
            var defaults = {
                obj: '',
                title: '弹窗标题',
                content: '弹窗内容',
                mask: 1,
                drag: 0,
                button: [{
                    id_name: '',
                    class_name: 'submit-btn',
                    title: '确定',
                    callback: function () { return true; }
                }, {
                    id_name: '',
                    class_name: 'option-btn',
                    title: '取消',
                    callback: function () { return true; }
                }],
                Width:'',
                Height: ''
            };

            if (opts.button) {
                if (!$.isArray(opts.button)) {
                    var obj = opts.button;
                    opts.button = [obj]
                } else if (opts.button.length < 2) {
                    opts.button.push("");
                }
                $.each(opts.button, function (i) {
                    opts.button[i] = $.extend({}, defaults.button[i], opts.button[i]);
                })
            }

            var opts = $.extend({}, defaults, opts);

            if (!opts.obj) return false;


            if (!$('#' + opts.obj).length) {
                var h = [
                    '<div id="' + opts.obj + '" class="win" style="display:none;width:' + opts.Width + 'px;">',
                    '<div class="win-hd" style=""><h3>' + opts.title + '<i></i></h3><a href="#win" class="win-close" title="关闭"><i class="icon-close"></i></a></div>',
                    '<div class="win-bd" style="height:' + opts.Height + 'px;">' + opts.content + '</div>',
                    '</div>'
                ];
                if (opts.mask) {
                    h.push('<div class="win-mask"></div>');//添加遮罩
                }
                $(document.body).append(h.join(''));
            }

            var o = $('#' + opts.obj);

            var win = {
                //显示弹窗
                show: function () {
                    $('.win-mask').css('height', $(document).height()).show();
                    setObjHeight();
                    o.show();
                },
                //关闭弹窗
                hide: function (e) {
                    $('.win-mask').remove();
                    o.remove();
                },
                //设置弹窗左边距
                left: function () {
                    var w_obj = o.outerWidth();
                    var w_window = $(window).width();
                    o.css('left', (w_window - w_obj) / 2);
                },
                //设置弹窗上边距
                top: function () {
                    var h_obj = o.find('.win-hd').outerHeight() + o.find('.win-bd').outerHeight();//获取弹框高度
                    //var h_obj=o.outerHeight();
                    var h_window = $(window).height();
                    if (o.outerHeight() >= $(window).height()) {
                        o.css('top', 0);
                    } else {
                        o.css('top', (h_window - h_obj) / 2);
                    }
                }
            }

            function setObjHeight() {
                if (o.outerHeight() >= $(window).height()) {
                    var m = o.outerHeight() - o.height();
                    var n = o.find('.win-bd').outerHeight() - o.find('.win-bd').height();
                    var y = $(window).height() - m - o.find('.win-hd').outerHeight() - n;
                    o.find('.win-bd').height(y);
                } else {
                    o.find('.win-bd').height(opts.Height);
                }
            }



            if (opts.button) {
                if(!o.find('.win-btn').length){
                    $('.win-bd').append('<div class="win-btn m-contact-btn"></div>');
                }
                $.each(opts.button, function (i) {
                        $('.win-btn').append('<a href="javascript:;" id="' + this.id_name + '" class="' + this.class_name + '" title="' + this.title + '"><span>' + this.title + '</span></a>');
                    
                    var callback = this.callback;
                    $('.win-btn').find('a').eq(i).click(function () {
                        (callback()) ? win.hide() : '';
                        win.hide();
                    })
                })
            }
            
            win.show();
            win.left();
            win.top();

            $(window).bind('resize', function () {
                setObjHeight();
                win.left();
                win.top();
                $('.win-mask').css('height', $(document).height()).show();
            })

            $('.win-close').bind('click', function () {
                win.hide();
                return false;
            })

            if (opts.drag) {
                $.winDrag('.win', '.win-hd');
            }
        }
    });

    /*=S 拖拽 */
    $.winDrag = function (obj, obj_hd) {
        var x = y = 0, m = false;
        $(obj_hd).bind('mousedown', function (e) {
            e = e || event;
            m = true;
            var $self = $(this);
            var win = $self.parent();
            x = e.pageX - win.offset().left;
            y = e.pageY - win.offset().top;
            if(!win.is(':animated')){
                win.fadeTo(100, .7);
            }
            return false;
        }).css('cursor', 'move');
        $(document).mousemove(function (e) {
            if (m) {
                var left = e.pageX - x, top = e.pageY - y - ($(document).scrollTop());
                $(obj).css({ left: left, top: top });
            }
        }).mouseup(function () {
            if (m) {
                m = false;
                $(obj).fadeTo(100, 1);
            }
        })
    };
    /*=E 拖拽 */
})(jQuery);