# Table of Contents <a id="top"></a>
1. [Headings](#headings)
2. [Paragraphs](#paragraphs)
3. [Line Break, Emphasis, bold and italic](#LbEBI)
4. [Blockquotes](#blockquotes)
5. [Lists](#lists)
6. [Images](#images)
7. [Code](#code)
8. [Horizontal Rules(hr)](#hr)
9. [Links](#links)
10. [Tables](#tables)
11. [Others](#others)

*****

# Headings <a id="headings"></a>
[Back to Top](#top)
To make a heading, put # in front of the text. The number of number sign you use correspond to heading level. For example, if you put 3 number signs, the heading level is 3.
|Markdown                      |HTML                            | Output                   |
|------------------------------|--------------------------------|--------------------------|
| ```# Heading Level 1```      | ```<h1>Heading Level 1</h1>``` | <h1>Heading Level 1</h1> |
| ```## Heading Level 2```     | ```<h2>Heading Level 2</h2>``` | <h2>Heading Level 2</h2> |
| ```### Heading Level 3```    | ```<h3>Heading Level 3</h3>``` | <h3>Heading Level 3</h3> |
| ```#### Heading Level 4```   | ```<h4>Heading Level 4</h4>``` | <h4>Heading Level 4</h4> |
| ```##### Heading Level 5```  | ```<h5>Heading Level 5</h5>``` | <h5>Heading Level 5</h5> | 
| ```###### Heading Level 6``` | ```<h6>Heading Level 6</h6>``` | <h6>Heading Level 6</h6> |

<br><br>

### Alternate Syntax
Alternatively, on the line below the text add any number of == characters for heading level 1 or -- character for heading level 2.
|Markdown                      |HTML                            | Output                   |
|------------------------------|--------------------------------|--------------------------|
| ```# Heading Level 1------```| ```<h1>Heading Level 1</h1>``` | <h1>Heading Level 1</h1> |
| ```## Heading Level 2=====```| ```<h2>Heading Level 2</h2>``` | <h2>Heading Level 2</h2> |


| :x: Don't do this        | :heavy_check_mark: Do this|
|--------------------------|---------------------------|
|    #This is a heading    | # This is a heading       |

**You have to put a space between number sign '''#''' and the heading name. You should also put blank lines before and after a heading for compatibility.**

*****

# Paragraphs <a id="paragraphs"></a>
[Back to Top](#top)

*****

# Line Break, Emphasis, bold and italic <a id="LbEBI"></a>
[Back to Top](#top)

*****

# Blockquotes <a id="Blockquotes"></a>
[Back to Top](#top)
If you want to create a blockquote, add a > in front of the text.

***Markdown***

`> This is a blockquote.`

<br>

***HTML***

&lt;blockquote&gt;<br>
   &lt;p&gt;This is a blockquote.&lt;/p&gt;<br>
&lt;/blockquote&gt;
<br>

***Output***
  > This is a blockquote.
*****

# Lists <a id="lists"></a>
[Back to Top](#top)

*****

# Images <a id="images"></a>
[Back to Top](#top)
*****

# Code <a id="code"></a>
[Back to Top](#top)

*****

# Horizontal Rules <a id="hr"></a>
[Back to Top](#top)

*****

# Links <a id="links"></a>
[Back to Top](#top)

*****

# Tables <a id="tables"></a>
[Back to Top](#top)
To create a table, use 3 or more hyphen(-) to make a column header, and use pipe(|) to separate each column.
***Markdown*** <br>
`| header 01 | header 02 |`<br>
`|-----------|-----------|`<br>
`| something | something |`<br>

***HTML*** <br>
&lt;table&gt;<br>
    &lt;tr&gt;<br>
        &lt;th&gt;header 01
        &lt;/th&gt;<br>
        &lt;th&gt;header 02
        &lt;/th&gt;<br>
    &lt;/tr&gt;<br>
    &lt;tr&gt;<br>
        &lt;td&gt;something
        &lt;/td&gt;<br>
        &lt;td&gt;something
        &lt;/td&gt;<br>
    &lt;/tr&gt;<br>

***Output***
| header 01 | header 02 |
|-----------|-----------|
| something | something |


Cells' widths can be vary, as shown below. The output will be the same.<br>
`| header 01 | header 02 |`<br>
`|---|----------------|`<br>
`| lorem ipsum | something |`<br>

*****

# Others <a id="others"></a>
[Back to Top](#top)

*****
