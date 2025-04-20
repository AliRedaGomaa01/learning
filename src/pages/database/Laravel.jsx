export default function Laravel() {
  return (
    <pre>
      {`
# important info 
  * we can use mongo DB with laravel & eloquent by using 3rd parties
  * use table plus to handle database
  * Model attributes ex. $hidden , $casts , $with , $table 
  * manipulate schema using path OR tinker

# code notes :
  * $book->isDirty('isbn') 
    - $category = new Category();  $category->name = $request->name  ;  $category->save() ;
  * use User::query()->count(); NOT DB::table('users')->count(); NOT User::count(); 
  * $myQuery->clone()
  * always use beginTransaction() commit() rollBack() in eloquent
  * using $with attribute in the model causes serializing errors
    - solve it with ->withOnly()
  * User::query()->truncate()

# migration  ( migrations table ) :
  * php artisan migrate ( fresh - refresh - rollback )

      `}
    </pre>
  );
}