const { default: Compiler } = require('../build/hs');

new Compiler().compile(`
  def num = 1.1;
  def str = "hello world";
  def bool1 = True;
  def bool2 = False;
  def nul = null;
  def fn = func f1(): pass;
  def sFn = type;
  read list = { num, str, fn, sFn };

  print(
    num,
    str,
    bool1,
    bool2,
    nul,
    fn,
    sFn,
    list
  );
`)