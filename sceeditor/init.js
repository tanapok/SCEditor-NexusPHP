var textarea = document.getElementById('descr');
sceditor.create(textarea, {
    format: 'bbcode',
    icons: 'monocons',
    style: 'minified/themes/content/default.min.css',
    toolbar: 'bold,italic,underline|left,center,right,justify|font,size,color,removeformat|image,link,unlink,bulletlist,code,quote|maximize,source',
    fonts: 'Arial,Arial Black,Comic Neue,Courier New,Georgia,Impact,Sans-serif,Serif,Times New Roman,Trebuchet MS,Verdana',
});
