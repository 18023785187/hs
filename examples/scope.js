const { default: Compiler } = require('../build/hs');

new Compiler().compile(`
  def id = 1;

  begin
    print("id:", id);

    id = id + 1;
  end;

  print("id:", id);

  def id2;

  id2 =
  begin
    print("id2:", id2);
    return id + 1;
  end;

  print("id2:", id2);
`)