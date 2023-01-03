const { default: Compiler } = require('../build/hs');

new Compiler().compile(`
  #> type <#
  print(type(True));

  #> timer <#
  func time(stop, count):
  begin
    if(count == 10): stop();

    print(count);
  end;

  timer(time, 100);
`)