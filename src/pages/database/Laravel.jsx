export default function Laravel() {
  return (
    <pre>
      {`
# important info 
  * we can use mongo DB with laravel & eloquent by using 3rd parties
  * use table plus to handle database
  * Model attributes ex. $hidden , $casts , $with , $table 
  * manipulate schema using path OR tinker.
  * string types 
    - TINYTEXT: 255 characters - 255 B 
    - TEXT: 65,535 characters - 64 KB
    - MEDIUMTEXT: 16,777,215 characters - 16 MB
    - LONGTEXT: 4,294,967,295 characters - 4 GB


# code notes :
  * $book->isDirty('isbn') 
    - $category = new Category();  $category->name = $request->name  ;  $category->save() ;
  * use User::query()->count(); NOT DB::table('users')->count(); NOT User::count(); 
  * $myQuery->clone()
  * always use beginTransaction() commit() rollBack() in eloquent
  * using $with attribute in the model causes serializing errors
    - solve it with ->withOnly()
  * User::query()->truncate()
  * searching 
    - $query->whereRaw("LOWER(CONCAT(name_ar, ' ', name_en)) LIKE ?", 
    ['%' . strtolower($product['category']['name']['en']) . '%']);


# migration  ( migrations table ) :
  * php artisan migrate ( fresh - refresh - rollback )

# performance :
  * use relations & reduce storing as json


      `}
    </pre>
  );
}