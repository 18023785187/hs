const { default: Compiler } = require('../build/hs');

new Compiler().compile(`
  func fn1():
  begin
    return
      func fn2():
        print("this is fn2");
  end;

  fn1()();
  print(fn1());

  def logResult = { func log(): print("log in list") }{0}();
`)