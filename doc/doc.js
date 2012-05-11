dw.doc = function(){
	var doc = {};

	doc.transform = {name:'Transforms', column:{},table:{},rows:{},text:{}};
	doc.interactions = {name:'Interactions'};
	doc.getting_started = {name:'Getting Started'};

	doc.getting_started.recommended_browsers = {
		
		name:'Recommended Browsers',
		description:'Wrangler has only been tested in Chrome, Safari and Firefox.  For best performance, we recommend you use Chrome or Safari.  Please let us know if you are having any trouble using Wrangler.'
		
		
	}


	doc.getting_started.importing_data = {
		
		name:'Importing Data',
		description:'You can use Wrangler to start working with raw text.  You can currently load your data through the text area when you start the app. When you load your data, Wrangler will automatically infer some transformations to get you started.  You can see which transorms Wrangler executed in the Transform History to the left of the Data Table.  You can undo, delete or edit any of these transforms by interacting with the Transform History. Wrangler currently supports up to 1000 rows of data and 40 columns of data.'	
		
	}

	doc.getting_started.exporting_data = {
		
		name:'Exporting Data',
		description:'To export your data, click the \'Export\' button in the Transform Script menu.  You can currently export data as CSV, TSV, row-oriented JSON or column-oriented JSON.'	
		
	}
	
	doc.getting_started.exporting_scripts = {
		
		name:'Exporting Scripts',
		//description:'To export your script, click the \'Export\' button in the Transform Script menu.  You can currently export scripts as python code.  To run the python code, you will need to install the python Data Wrangler runtime: easy_install datawrangler.  If you are not familiar with python or easy_install please contact us for more detailed instructions.  If you have request for Data Wrangler in other language, please send us a request.'	
		description:'<span>To export your script, click the \'Export\' button in the Transform Script menu.  You can currently export scripts as python code or javascript code. \
			</br>\
			</br>\
			To run python code, you will need to install the python Data Wrangler runtime in one of two ways: easy_install datawrangler or download the library <a class=\'runtimeLink\' href=\'http://vis.stanford.edu/wrangler/files/python/DataWrangler-0.1.tar.gz\'> here.</a>\
			\
			</br>\
			</br>\
			To run javascript code, you will need to install the javascript Data Wrangler runtime which you can download <a class=\'runtimeLink\' href=\'http://vis.stanford.edu/wrangler/files/javascript/dwrt-r0.1.js\'> here.</a>\
		</span>\
		'//dw.jq('span').append('To export your script, click the \'Export\' button in the Transform Script menu.  You can currently export scripts as python code or javascript code.').append(dw.jq('span''To run the python code, you will need to install the python Data Wrangler runtime: easy_install datawrangler or download the library ').append(dw.jq('a').attr('href', 'http://www.stanford.edu/~skandel/platform/python/DataWrangler-0.1.tar.gz').append('here.').addClass('runtimeLink'))//  If you are not familiar with python or easy_install please contact us for more detailed instructions.  If you have request for Data Wrangler in other language, please send us a request.'	
	}
	doc.getting_started.exporting_scripts.python = 'To run python code, you will need to install the python Data Wrangler runtime in one of two ways: easy_install datawrangler or download the library <a class=\'runtimeLink\' href=\'http://vis.stanford.edu/wrangler/files/python/DataWrangler-0.1.tar.gz\'> here.</a>'
	doc.getting_started.exporting_scripts.javascript = 'To run javascript code, you will need to install the javascript Data Wrangler runtime which you can download <a class=\'runtimeLink\' href=\'http://vis.stanford.edu/wrangler/files/javascript/dwrt-r0.1.js\'> here.</a>'
	doc.getting_started.wrangler_interface = {
		
		name:'Wrangler Interface',
		img:'wrangler_interface',
		description:'The Wrangler interface (Figure 1) consists of a Data Table, a Transform History and a Transform Editor.  When you interact with the Data Table, Wrangler automatically suggests possible transforms in the Transform Editor.  You can mouse over suggestions, or use the up/down keys to navigate the suggestions.  Wrangler will preview the highlighted suggestions\' effect in the Data Table.  Note, that the transform has not yet been executed - its effect is just being previewed.  You can execute the transform by pressing Enter on the keyboard or by clicking the green Add button to the right of the suggestion.  After you execute a Transform, it is added to the Transform History.  You can toggle transforms on or off by clicking the undo/redo buttons next to the desired transform.'
		
		
	}

	doc.getting_started.wrangler_interactions = {
		
		name:'Wrangler Interactions',
		img:'wrangler_interactions',
		description:'The Wrangler interface supports six basic interactions within the data table. You can select rows, select columns, click bars in the data quality meter, select text within a cell, edit data values within the table (for mass editing), and assign column names. You can also choose transforms from the menu or refine suggestions by editing transform descriptions.  In response to your interactions, Wrangler generates suggested transformations in the Transform Editor to the left of the table.'
		
		
	}


	doc.interactions.text_selection = {
		name:'Selecting Text',
		description:'You can select text within individual cells in Wrangler.  In response, Wrangler will guess the type of selection you are making so that it can generalize this selection to other cells in the column.  It will highlight selected text in each cell.  If Wrangler guess incorrectly, you can update the inference by selecting text in other cells.  Wrangler also guesses which type of transform you are trying to execute.  Usually Wrangler suggests Split, Cut, or Extract transforms based on your selection.  If it guess incorrectly, you can pick the desired transform from the Transform Menu.  Text selection is also useful for constructing Delete operations.  You can select text in a cell that indicates the types of rows you want to Delete.  After clicking the Delete operation in the Transform Menu, you should get suggestions for deleting rows that contain those values.'
	}
	
	doc.interactions.row_selection = {
		name:'Selecting Rows',
		description:'You can select individual rows in Wrangler by clicking row headers in the Data Table (Use ctrl/shift to select multiple rows).  In response, Wrangler will guess which types of rows you are selecting so that it can generalize the selection.  For instance, if you click one empty row in the table, Wrangler may guess that you are trying to select all the empty rows, so that you can delete all of them.  Wrangler also guess which type of transform you are trying to execute.  Usually Wrangler suggests, Delete or Fill transforms. If it guess incorrectly, you can pick the desired transform from the Transform Menu.'
	}

	doc.interactions.column_selection = {
		name:'Selecting Columns',
		description:'You can select individual columns in Wrangler by clicking column headers in the Data Table (Use ctrl/shift to select multiple headers). Wrangler guesses which type of transform you are trying to execute. If it guess incorrectly, you can pick the desired transform from the Transform Menu.'
	}

	doc.interactions.data_quality = {
		name:'Data Quality Bar',
		description:'Above each column is a Data Quality Bar.  A green bar indicates values Wrangler considers valid.  The grey bar indicates missing values.  A red bar indicates values that are not missing, but that do not match the data type for the column.  When you click a bar, Wrangler suggest transforms for those types of values.  For instance, clicking the grey bar will initiate suggestions for dealing with missing values, such as deleting rows containing missing values, or filling in missing values with other values from the column.'
	}
	
	doc.interactions.text_editing = {
		name:'Editing Text',
		description:'To edit data in the table, you can double click a cell in the Data Table.  After editing the text, Wrangler will generate Edit transforms that you can execute.  Remember, Wrangler previews transforms, but they are not executed until you hit Enter on the keyboard or click the green Add button next to the transform'
	}

	doc.interactions.editing_suggestions = {
		name:'Editing Transforms',
		description:'You can edit the parameters of a suggested transform or a transform in the Transform History by clicking the bold-faced parameters in the description.  To edit the parameters of a suggestion, you must first promote the transform to the Working Transformation by clicking the transform.  The Working Transformation will appear at the top of the Transform Editor below the the Transform Menu.  Sometimes the description may not contain the parameter you want to edit.  To see more options for editing parameters, click the arrow to the left of the transform.    You can also edit the Working Transform by interacting more with the Data Table.  See the section on advanced editing (coming soon) for more details.'
	}

	doc.interactions.transform_menu = {
		name:'Transform Menu',
		description:'You can use the Transform Menu to rerank Wranglers Suggestions.  For instance, if you want Wrangler to rank \'Delete\' transforms highest, you can select that transform from the Transform Menu.'
	}
	
	doc.transform.column.Drop = {
		name:'Drop',
		description:'Deletes the specified columns from the table.',
		execution:'Drop is most easily specified by selecting the headers of the columns you want to drop.  You can then execute the appropriate Drop transform in the suggestions.  If no Drop transform appears in the suggestions, select \'Drop\' from the \`Column\` menu in the Transform Editor.',
		parameters:[
			{name:'column', description:'The column to Split'},
			{name:'on', description:'A pattern of text to Split on.  Accepts literals such as comma or perl style regular expressions'},
			{name:'before', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'after', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'max', description:'Specifies how many times to perform the Split.  You can Split a column once, or repeatedly.  If you Split it repeatedly, Wrangler will Split the column repeatedly until no cell in the resulting columns could be Split again'},
			{name:'result', description:'By setting result to column, the Split values will end up in new columns.  When you set the result to rows, the column will generate a new row for each Split value.  All other column values are repeated across values.  This is most common for initially Splitting data into records on a delimiter such as newline but can also be used to unnest values'}
		 ]
	}
	
	doc.transform.column.Merge = {
		name:'Merge',
		description:'Merges two or more columns into one column by merging the contents of their cells together with optional glue text.',
		execution:'Merge is most easily specified by selecting the headers of the columns you want to merge.  You can then execute the appropriate Merge transform in the suggestions.  If no Merge transform appears in the suggestions, select \'Merge\' from the \`Column\` menu in the Transform Editor.',
		parameters:[
			{name:'column', description:'The column to Split'},
			{name:'on', description:'A pattern of text to Split on.  Accepts literals such as comma or perl style regular expressions'},
			{name:'before', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'after', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'max', description:'Specifies how many times to perform the Split.  You can Split a column once, or repeatedly.  If you Split it repeatedly, Wrangler will Split the column repeatedly until no cell in the resulting columns could be Split again'},
			{name:'result', description:'By setting result to column, the Split values will end up in new columns.  When you set the result to rows, the column will generate a new row for each Split value.  All other column values are repeated across values.  This is most common for initially Splitting data into records on a delimiter such as newline but can also be used to unnest values'}
		 ]
	}
	
	doc.transform.rows.Promote = {
		name:'Promote',
		description:'Sets the tables column names to the values in a given row.',
		execution:'Select the row that contains the values you want to use as a header.  If no Promote transform appears in the suggestions, select \'Promote\' from the \'Rows\' menu in the Transform Editor.',
		parameters:[
			{name:'column', description:'The column to Split'},
			{name:'on', description:'A pattern of text to Split on.  Accepts literals such as comma or perl style regular expressions'},
			{name:'before', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'after', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'max', description:'Specifies how many times to perform the Split.  You can Split a column once, or repeatedly.  If you Split it repeatedly, Wrangler will Split the column repeatedly until no cell in the resulting columns could be Split again'},
			{name:'result', description:'By setting result to column, the Split values will end up in new columns.  When you set the result to rows, the column will generate a new row for each Split value.  All other column values are repeated across values.  This is most common for initially Splitting data into records on a delimiter such as newline but can also be used to unnest values'}
		 ]
	}
	
	doc.transform.table.Transpose = {
		name:'Transpose',
		description:'Transposes the table so that the rows become columns of the table and columns become rows of the table.',
		execution:'Select \'Transpose\' from the \'Table\' menu in the Transform Editor',
		parameters:[
			{name:'column', description:'The column to Split'},
			{name:'on', description:'A pattern of text to Split on.  Accepts literals such as comma or perl style regular expressions'},
			{name:'before', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'after', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'max', description:'Specifies how many times to perform the Split.  You can Split a column once, or repeatedly.  If you Split it repeatedly, Wrangler will Split the column repeatedly until no cell in the resulting columns could be Split again'},
			{name:'result', description:'By setting result to column, the Split values will end up in new columns.  When you set the result to rows, the column will generate a new row for each Split value.  All other column values are repeated across values.  This is most common for initially Splitting data into records on a delimiter such as newline but can also be used to unnest values'}
		 ]
	}
	
	// doc.Aggregation = {
	// 	name:'Aggregation',
	// 	description:'Aggregation is coming soon.',
	// 	execution:'',
	// 	parameters:[
	// 		{name:'column', description:'The column to Split'},
	// 		{name:'on', description:'A pattern of text to Split on.  Accepts literals such as comma or perl style regular expressions'},
	// 		{name:'before', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
	// 		{name:'after', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
	// 		{name:'max', description:'Specifies how many times to perform the Split.  You can Split a column once, or repeatedly.  If you Split it repeatedly, Wrangler will Split the column repeatedly until no cell in the resulting columns could be Split again'},
	// 		{name:'result', description:'By setting result to column, the Split values will end up in new columns.  When you set the result to rows, the column will generate a new row for each Split value.  All other column values are repeated across values.  This is most common for initially Splitting data into records on a delimiter such as newline but can also be used to unnest values'}
	// 	 ]
	// }



	// doc.Merge = {
	// 	name:'Merge',
	// 	description:'Merges two or more columns into one column by merging the contents of their cells together with optional glue text.',
	// 	execution:'Merge is most easily specified by selecting the headers of the columns you want to merge.  You can then execute the appropriate Merge transform in the suggestions.  If no Merge transform appears in the suggestions, select \'Merge\' from the \`Column\` menu in the Transform Editor.',
	// 	parameters:[
	// 		{name:'column', description:'The column to Split'},
	// 		{name:'on', description:'A pattern of text to Split on.  Accepts literals such as comma or perl style regular expressions'},
	// 		{name:'before', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
	// 		{name:'after', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
	// 		{name:'max', description:'Specifies how many times to perform the Split.  You can Split a column once, or repeatedly.  If you Split it repeatedly, Wrangler will Split the column repeatedly until no cell in the resulting columns could be Split again'},
	// 		{name:'result', description:'By setting result to column, the Split values will end up in new columns.  When you set the result to rows, the column will generate a new row for each Split value.  All other column values are repeated across values.  This is most common for initially Splitting data into records on a delimiter such as newline but can also be used to unnest values'}
	// 	 ]
	// }
	
	
	doc.transform.text.Edit = {
		name:'Edit',
		description:'Edits the text in each cell of the specified columns',
		execution:'Edit is most easily specified by double clicking a cell in the table and editing the text in that cell.  When you are done editing the cell, Wrangler will suggest different edit transforms to choose from.  Wrangler currently has a limited number of editing transforms, but we will be adding more soon.',
		parameters:[
			{name:'column', description:'The column to Split'},
			{name:'on', description:'A pattern of text to Split on.  Accepts literals such as comma or perl style regular expressions'},
			{name:'before', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'after', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'max', description:'Specifies how many times to perform the Split.  You can Split a column once, or repeatedly.  If you Split it repeatedly, Wrangler will Split the column repeatedly until no cell in the resulting columns could be Split again'},
			{name:'result', description:'By setting result to column, the Split values will end up in new columns.  When you set the result to rows, the column will generate a new row for each Split value.  All other column values are repeated across values.  This is most common for initially Splitting data into records on a delimiter such as newline but can also be used to unnest values'}
		 ]
	}
	

	
	doc.transform.text.Split = {
		name:'Split',
		description:'Splits a column into two or more columns by Splitting each cell in the original column into multiple values.  Each of these values is placed in a new column.  This operation is similar to Microsoft Excel\'s text-to-columns operation. The Split can be based on position or by matching a pattern such as a string literal or regular expression',
		execution:'Split is most easily specified by highlighting the text within a cell that you want to Split the cell on.  Wrangler will guess which text you are trying to select in each cell and highlight matching text in each column.  If Wrangler guesses incorrectly, you can update its inference by selecting new text in another cell.  Sometimes Wrangler will guess other text-based transforms such as extaction or deletion.  You can select \'Split\' from the \'Text\' from the transform menu to force Wrangler to rank Split transforms more highly.',
		parameters:[
			{name:'column', description:'The column to Split'},
			{name:'on', description:'A pattern of text to Split on.  Accepts literals such as comma or perl style regular expressions'},
			{name:'before', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'after', description:'A pattern of text to Split before.  Accepts literals such as comma or perl style regular expression'},
			{name:'max', description:'Specifies how many times to perform the Split.  You can Split a column once, or repeatedly.  If you Split it repeatedly, Wrangler will Split the column repeatedly until no cell in the resulting columns could be Split again'},
			{name:'result', description:'By setting result to column, the Split values will end up in new columns.  When you set the result to rows, the column will generate a new row for each Split value.  All other column values are repeated across values.  This is most common for initially Splitting data into records on a delimiter such as newline but can also be used to unnest values'}
		 ]
	}
	
		doc.transform.text.Cut = {
		name:'Cut',
		description:'Deletes specified text from each cell in specified columns. The Cut can be based on position or by matching a pattern such as a string literal or regular expression.',
		execution:'Cut is most easily specified by highlighting the text within a cell that you want to Cut.  Wrangler will guess which text you are trying to select in each cell and highlight matching text in each column.  If Wrangler guesses incorrectly, you can update its inference by selecting new text in another cell.  Sometimes Wrangler will guess other text-based transforms such as extaction or Splitting.  You can select \'Cut\' from the \'Text\' transform menu to force Wrangler to rank Cut transforms more highly.',
		parameters:[
			{name:'column', description:'The column to Cut'},
			{name:'on', description:'A pattern of text to Cut.  Accepts literals such as comma or perl style regular expressions'},
			{name:'before', description:'A pattern of text to Cut before.  Accepts literals such as comma or perl style regular expression'},
			{name:'after', description:'A pattern of text to Cut before.  Accepts literals such as comma or perl style regular expression'},
			{name:'max', description:'Specifies how many times to perform the Cut.  You can Cut from a column once, or repeatedly.  If you Cut it repeatedly, Wrangler will Cut text from the cell until there is no more text to Cut'},
		 ]
	}
	
	doc.transform.text.Extract = {
		name:'Extract',
		description:'Copies text from each cell in a specified column into a new column. The Extract can be based on position or by matching a pattern such as a string literal or regular expression',
		execution:'Extract is most easily specified by highlighting the text within a cell that you want to Extract.  Wrangler will guess which type of text you are trying to select in each cell and highlight matching text in each column.  If Wrangler guesses incorrectly, you can update its inference by selecting new text in another cell.  Sometimes Wrangler will guess other text-based transforms such as Cutting or Splitting.  You can select \'Extract\' from the \'Text\' transform menu to force Wrangler to rank Extract transforms more highly.',
		parameters:[
			{name:'column', description:'The column to Extract'},
			{name:'on', description:'A pattern of text to Extract.  Accepts literals such as comma or perl style regular expressions'},
			{name:'before', description:'A pattern of text to Extract before.  Accepts literals such as comma or perl style regular expression'},
			{name:'after', description:'A pattern of text to Extract before.  Accepts literals such as comma or perl style regular expression'},
			{name:'max', description:'Specifies how many times to perform the Extract.  You can Extract from a column once, or repeatedly.  If you Extract it repeatedly, Wrangler will Extract text from the cell until there is no more text to Extract'},
		 ]
	}
	
	doc.transform.column.Fill = {
		name:'Fill',
		description:'Fills in missing values with values from other columns or rows in the table.  ',
		execution:'Fill is most easily specified by selecting the rows or columns you want to Fill in and then finding and editing the Fill transform in the suggestions. You can select Fill from the columns or rows menu to rank Fill transforms more highly.',
		parameters:[
			{name:'column', description:'The columns to Fills.  If this is left blank, Wrangler assumes to Fill in all the columns'},
			{name:'row', description:'The rows to Fills.  If this is left blank, Wrangler assumes to Fill in all the rows.  See rows below for detailed description of constructing row arguments'},
			{name:'direction', description:'The direction to perform the Fill.  Indicates from which direction Wrangler Fills in values the table.'},
		 ]
	}
	
	doc.transform.rows.Filter = {
		name:'Delete',
		description:'Deletes rows from a table.  Can delete rows with a given index or satisfying some condition',
		execution:'Deleteis most easily specified in two ways. First, you can selecting the header of the rows you want to delete.  Second, you can select text in cells that indicate more directly the types of rows you want to delete.',
		parameters:[
			{name:'row', description:'The rows to delete.  If this is left blank, Wrangler assumes to delete all the rows'},
		 ]
	}
	
	doc.transform.table.Fold = {
		name:'Fold',
		description:'One of Wrangler\'s reshape operations.  The Fold transform converts one or more columns to two or more columns containing key-value sets.',
		execution:'To specify a Fold transform, select the columns you want to fold.  If no Fold transforms appear in the suggestions, select \'Fold\' from the \'Table\' menu in the Transform Editor.  Wrangler should suggest Fold operations using different rows as keys.  If none of those combination of rows is correct, you can edit a highlighted Fold suggestion by pressing Tab on the keyboard or by clicking the suggestion.  Once the suggestion has been promoted to the Working Transform, you can select which rows in the Data Table you want to use as keys by clicking the row headers in the Data Table.  This should generate new Fold suggestions with the appropriate keys.  Hit Enter or click the green Add transform button to execute the transform.',
		parameters:[
			{name:'row', description:'The rows to delete.  If this is left blank, Wrangler assumes to delete all the rows'},
		 ]
	}
	
	doc.transform.table.Unfold = {
		name:'Unfold',
		description:'One of Wrangler\'s reshape operations.  Unfold creates new column headers from data values.  See below for an example.',
		execution:'To execute an unfold, select two columns in the Data Table.  Selct the column containing values you want to become new headers in the Data Table and select the column containing values that should end up in those new columns.  Unfold transforms may appear in the suggestions.  If not, select \'Unfold\' from the \`Table\` menu in the Transform Menu.  Currently, you can only execute an Unfold on a table with three or more columns, as you need one column to help group the data into the appropriate rows.',
		parameters:[
			{name:'row', description:'The rows to delete.  If this is left blank, Wrangler assumes to delete all the rows'},
		]
	}
	

	
	return doc;
}
