//Dont change it
requirejs(['ext_editor_1', 'jquery_190', 'raphael_210'],
    function (ext, $, TableComponent) {

        var cur_slide = {};

        ext.set_start_game(function (this_e) {
        });

        ext.set_process_in(function (this_e, data) {
            cur_slide["in"] = data[0];
        });

        ext.set_process_out(function (this_e, data) {
            cur_slide["out"] = data[0];
        });

        ext.set_process_ext(function (this_e, data) {
            cur_slide.ext = data;
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_process_err(function (this_e, data) {
            cur_slide['error'] = data[0];
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_animate_success_slide(function (this_e, options) {
            var $h = $(this_e.setHtmlSlide('<div class="animation-success"><div></div></div>'));
            this_e.setAnimationHeight(115);
        });

        ext.set_animate_slide(function (this_e, data, options) {
            var $content = $(this_e.setHtmlSlide(ext.get_template('animation'))).find('.animation-content');
            if (!data) {
                console.log("data is undefined");
                return false;
            }

            var checkioInput = data.in;

            if (data.error) {
                $content.find('.call').html('Fail: checkio(' + JSON.stringify(checkioInput) + ')');
                $content.find('.output').html(data.error.replace(/\n/g, ","));

                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
                $content.find('.answer').remove();
                $content.find('.explanation').remove();
                this_e.setAnimationHeight($content.height() + 60);
                return false;
            }

            var rightResult = data.ext["answer"];
            var userResult = data.out;
            var result = data.ext["result"];
            var result_addon = data.ext["result_addon"];


            //if you need additional info from tests (if exists)
            var explanation = data.ext["explanation"];

            $content.find('.output').html('&nbsp;Your result:&nbsp;' + JSON.stringify(userResult));

            if (!result) {
                $content.find('.call').html('Fail: checkio(' + JSON.stringify(checkioInput) + ')');
                $content.find('.answer').html('Right result:&nbsp;' + JSON.stringify(rightResult));
                $content.find('.answer').addClass('error');
                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
            }
            else {
                $content.find('.call').html('Pass: checkio(' + JSON.stringify(checkioInput) + ')');
                $content.find('.answer').remove();
            }
            //Dont change the code before it

            var $expl = $content.find(".explanation");
            var words = checkioInput.match(/\w+/g);
            for (var i = 0; i < words.length; i++) {
                var span = $("<span></span>").text(words[i] + " ");
                if (words[i].match(/\d+/)) {
                    span.addClass("number");
                }
                $expl.append(span);
            }


            this_e.setAnimationHeight($content.height() + 60);

        });

        var $tryit;

        ext.set_console_process_ret(function (this_e, ret) {
            $tryit.find(".checkio-result").html("Your Result<br>" + ret);
        });

        ext.set_generate_animation_panel(function (this_e) {
            $tryit = $(this_e.setHtmlTryIt(ext.get_template('tryit'))).find('.tryit-content');
            $tryit.find('.bn-check').click(function (e) {
                e.preventDefault();
                var $input = $tryit.find(".text-input");
                var data = $input.val();
                this_e.sendToConsoleCheckiO(data);
                e.stopPropagation();
                return false;
            });

            var rWords = ["hi", 'hello', 'one', "two", "three", "four", "five", "six", "seven", "eight", "nine",
            "checkio", "task"];

            $tryit.find('.bn-random').click(function (e) {
                e.preventDefault();
                var numb = Math.floor(Math.random() * 10);
                var res = [];
                for (var i = 0; i < numb; i++) {
                    if (Math.random() < 0.5) {
                        res.push(String(Math.floor(Math.random() * 1000)));
                    }
                    else {
                        res.push(rWords[Math.floor(Math.random() * rWords.length)]);
                    }
                }
                $tryit.find(".text-input").val(res.join(" "));
                return false;
            });
        });


    }
);
