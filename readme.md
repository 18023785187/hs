# hs 语言

<a href="https://www.npmjs.com/package/hym-script"><img src="https://img.shields.io/npm/v/hym-script.svg" alt="Version"></a>
<a href="https://npmcharts.com/compare/hym-script?minimal=true"><img src="https://img.shields.io/npm/dm/hym-script.svg" alt="Downloads"></a>
<a href="https://github.com/18023785187/hs/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/hs.svg" alt="License"></a>
<a href="https://github.com/18023785187/hs/search?l=javascript"><img src="https://img.shields.io/github/languages/top/18023785187/hs.svg" alt="TopLang"></a>

#### 介绍

hs 使用 LL1 文法实现，特点是类似 python 的语法。

#### 运行

拉取项目后执行 `npm link`，在需要运行的 `.hs` 后缀文件的目录下执行 `hs xxx.hs` 即可。

或 `npm i hym-script -g` 下载项目，直接运行 `hs xxx.hs`。

注意：请使用 v14 以上的 node 版本。

#### 特性

###### 注释

注释由 `#> comment... <#` 进行包裹。

```javascript
#>
  这是注释
<#
```

###### 分号

hs 每一段语句都需要用 `;` 结尾。

###### 变量

目前支持数字、字符串、null、布尔值、数组

```javascript
def num = 1.23;
def str = "hello hs";
def nul = null;
def bool1 = True;
def bool2 = False;
def array = {1, True, func f(): pass};

array{1}; #> True <#

#>
  字符串支持换行
<#
def str2 = "
  hello hs
";
```

###### 数组

数组由 `{}` 声明，并内置一系列数组方法。

```javascript
#> 声明 <#
def list = {1, True, False, func f(): pass};

print(list{1}); #> True <#

#> 多维数组 <#
def list = {{{1}}, 2};

print(list{0}{0}{0}) #> 1 <#

#> 改变数组值 <#
list{0} = 6;

#> 调用数组内置方法 <#
list{"append"}(1,2,3); #> 往数组末尾添加 1、2、3 <#
list{"pop"}(); #> 由数组末尾弹出一个元素 <#
list{"reverse"}(); #> 反转数组 <#
list{"copy"}(); #> 浅拷贝 list 数组 <#
len(list); #> 返回数组长度 <#
```

###### 声明变量

关键字 `def` 和 `read`，用于声明变量，其中 `read` 不可变。

```javascript
def v1;
def v2 = 1;

#> 链式声明变量 <#
def v3 = 2, v4 = 3;

read v5 = 6;
v5 = 7; #> 报错，read 声明的变量不可变 <#
read v6; #> 报错，read 声明的变量必须赋初始值 <#
```

###### 运算符

= 表示赋值，== 表示全等比较，not= 表示不等于比较。
比较运算符有 >、>=、<、<=。
算术运算符有 +、-、*、/、%。
逻辑运算符有 and、or、not，依次表示与或非。·

```javascript
def a = 1 and 2 or not 3;
```

###### 块级作用域

`begin`、`end` 关键字表示块作用域。

```javascript
begin
  def a = 1;
end;

print(a); #> 报错，作用域外不能访问作用域内的变量 <#

#> 作用域具有返回值 <#
def a =
begin
  return 666;
end;

print(a); #> 666 <#
```

###### 方法声明与调用

`func` 关键字用于声明方法。

```javascript
func fn():
begin return 666; end;

print(fn()); #> 666 <#

#> pass 关键字可代替空函数 <#
func fn2(): pass;

#> 还可以通过 def 关键字声明方法 <#
def fn3 = func fn4(): pass;
```

###### 条件语句

`if ... elif ... else` 用于声明条件语句。

```javascript
if(2 > 3): pass
elif(3 > 2): pass
else: pass;
```

###### 循环语句

`while ... else` 和 `for ... else` 用于声明循环语句。

```javascript
#> 当循环体不被 return、break 强制退出时将会在结束循环时执行 else 块的语句 <#
while(1):
begin
  if(3 > 2): break;
end
else: pass;

for(def a = 0; a < 10; a = a + 1):
pass
else:
pass;

#> 循环体也可作为返回值 <#
def result = 
while(1): break 666;
```

###### 深入 hs

条件语句和循环语句当只有一条语句时可进行简写，并作为值返回。

```javascript
#> 但是 return 语句不能简写 <#
if(1): 1 + 1;
if(1): fn();
while(1): pass;
while(1): break;
while(1): continue;
```

当条件语句和循环语句作为赋值语句时 `return` 与 `break` 将失效。

```javascript
func fn1():
begin
  while(1):
  begin
    if(1):
    begin
      if(1):
      begin
        return 6666;
      end;
    end;
  end;

  print("此处不再执行");
end;

print(fn1()); #> 6666 <#

func fn1():
begin
  def num =
  while(1):
  begin
    if(1):
    begin
      if(1):
      begin
        return 6666;
      end;
    end;
  end;

  print("此处还会执行，因为 while 作为赋值语句执行，return 无效");
  return num + 1111;
end;

print(fn2()); #> 7777 <#
```

#### 系统方法

###### print(...args)

用于在控制台打印变量。

```javascript
print(2, True); #> 2, True <#
print(print); #> <SystemFunction print> <#
print(func fn(): pass); #> <Function fn> <#
```

###### type(value)

返回给定值的类型。

```javascript
type(func a(): pass); #> <class function> <#
```

###### len(array)

返回数组的长度。

```javascript
len({1, 2, 3}); #> 3 <#
```

###### eval(string)

把字符串作为 hs 语法执行。

```javascript
eval("def a = 1;");
```

###### timer(callback(stop, count), time)

定时器，接收一个回调函数和数字，time 表示每隔多少毫秒执行一次回调函数。

```javascript
#> stop 为停止定时器的方法，count 表示定时器已执行的次数 <#
func callback(stop, count):
begin
  if(count == 5): stop();
end;

timer(callback, 100);
```