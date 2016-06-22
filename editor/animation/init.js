//Dont change it
requirejs(['ext_editor_io', 'jquery_190'],
    function (extIO, $) {
        var $tryit;

        var io = new extIO({
            functions: {
                js: 'threeWords',
                python: 'checkio'
            },
            animation: function($expl, data){
                var checkioInput = data.in;
                if (!checkioInput) {
                    return;
                }
                var words = checkioInput.match(/\w+/g);
                for (var i = 0; i < words.length; i++) {
                    var span = $("<span></span>").text(words[i] + " ");
                    if (words[i].match(/\d+/)) {
                        span.addClass("number");
                    }
                    $expl.append(span);
                }
            },
            tryit:function (this_e) {
                $tryit = this_e.extSetHtmlTryIt(this_e.getTemplate('tryit')).find(".tryit-content");
                $tryit.find('.bn-check').click(function (e) {
                    e.preventDefault();
                    var $input = $tryit.find(".text-input");
                    var data = $input.val();
                    this_e.extSendToConsoleCheckiO(data);
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

            },
            retConsole: function (ret) {
                $tryit.find(".checkio-result").html("Your Result<br>" + ret);
            }
        });
        io.start();

    }
);
